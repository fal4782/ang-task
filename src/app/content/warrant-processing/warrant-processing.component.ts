import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { DateService } from 'src/app/shared/services/date.service';

interface WorkflowState {
  warrantStateCode: number;
  warrantState: string;
}

interface CourtName {
  courtName: string;
}

interface Warrant {
  warrantRefNo: number;
  issueDate: Date;
  idNumber: number; //dl number
  firstName: string;
  middleName: string;
  lastname: string;
  courtName: string;
  courtHearingDate: Date;
  warrantDate: Date;
  printStatus: string;
  warrantState: string;
}
@Component({
  selector: 'app-warrant-processing',
  templateUrl: './warrant-processing.component.html',
  styleUrls: ['./warrant-processing.component.scss'],
})
export class WarrantProcessingComponent {
  filterForm: any;
  workflowStates: WorkflowState[];
  workflowLabel: any;
  courtNames: CourtName[];
  allPrintStatus: any[];
  warrants: Warrant[];
  selectedWarrants: Warrant;
  primaryBgColor: any = '#2196F3'; //initital blue
  primaryTextColor: any = 'white';
  filters: any;
  noOfFilters = 0;
  chips: any[];
  siteTheme: any;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private dateService: DateService
  ) {}

  prerequisite() {
    this.configureWorkflowState();
    this.configureCourtName();
    this.configurePrintStatus();
    this.createFilterForm();
    // this.getWarrantsList();
  }

  ngOnInit() {
    this.prerequisite();
  }

  //need to find another hook to do this
  ngDoCheck() {
    this.setSiteTheme();
  }

  setSiteTheme() {
    this.siteTheme = this.commonService.getStoredTheme();

    if (this.siteTheme) {
      this.commonService.applyThemeStyles(
        this.siteTheme.theme,
        this.siteTheme.color
      );
    }
  }

  configureWorkflowState() {
    this.workflowStates = [
      { warrantStateCode: 395, warrantState: 'Vacate order' },
      { warrantStateCode: 330, warrantState: 'Received By police' },
    ].map((state) => ({
      ...state,
      workflowLabel: `${state.warrantStateCode} - ${state.warrantState}`,
    }));
  }

  configureCourtName() {
    this.courtNames = [{ courtName: 'Kingston Parish Court' }];
  }

  configurePrintStatus() {
    this.allPrintStatus = [
      { status: 'Printed', key: 'P' },
      { status: 'Not Printed', key: 'NP' },
      { status: 'Both', key: 'B' },
    ];
  }

  createFilterForm() {
    this.filterForm = this.formBuilder.group({
      warrantRefNo: [],
      issueDateStart: [],
      issueDateEnd: [],
      dlNo: [],
      offenderName: [],
      workflowState: [],
      courtName: [],
      printStatus: [],
    });
  }

  get filterFormControls() {
    return this.filterForm.controls;
  }

  submitForm() {
    console.log('form submitted');

    this.filters = {
      warrantRefNo: this.filterFormControls.warrantRefNo.value,
      issueDateStart: this.dateService.convertToUnixTimestamp(
        this.filterFormControls.issueDateStart.value
      ),
      issueDateEnd: this.dateService.convertToUnixTimestamp(
        this.filterFormControls.issueDateEnd.value
      ),
      dlNo: this.filterFormControls.dlNo.value,
      offenderName: this.filterFormControls.offenderName.value,
      workflowState: this.filterFormControls.workflowState.value,
      courtName: this.filterFormControls.courtName.value,
      printStatus: this.filterFormControls.printStatus.value,
    };

    console.log('filters: ', this.filters);

    this.noOfFilters = 0; //reset for every form submission
    this.chips = [];
    this.getWarrantsList();
    // console.log('chips', this.chips);
  }

  getWarrantsList() {
    this.commonService.getWarrantsData().subscribe((data) => {
      //   console.log('getting warrants list');

      // Filter by warrantRefNo
      if (this.filters?.warrantRefNo) {
        data = data.filter((warrant) =>
          warrant.warrantRefNo.toString().includes(this.filters.warrantRefNo)
        );
        this.noOfFilters++;
        this.chips.push('Warrant Ref No');
      }

      //Filter by issueDate
      if (this.filters?.issueDateStart && this.filters?.issueDateEnd) {
        data = data.filter((warrant) => {
          const issueDate = new Date(warrant.issueDate);
          return (
            issueDate >= this.filters.issueDateStart &&
            issueDate <= this.filters.issueDateEnd
          );
        });
        this.noOfFilters++;
        this.chips.push('Issue Date');
      }

      //Filter by DL Number/id
      if (this.filters?.dlNo) {
        data = data.filter((warrant) =>
          warrant.idNumber.toString().includes(this.filters.dlNo)
        );
        this.noOfFilters++;
        this.chips.push('DL Number');
      }

      // Filter by Offender Name
      if (this.filters?.offenderName) {
        const searchName = this.filters.offenderName.toUpperCase();

        data = data.filter((warrant) => {
          const fullName = `${warrant.firstName} ${warrant.middleName} ${warrant.lastname}`;
          return fullName.toUpperCase().includes(searchName);
        });
        this.noOfFilters++;
        this.chips.push('Offender Name');
      }

      //Filter by Workflow Status
      if (this.filters?.workflowState) {
        data = data.filter(
          (warrant) =>
            warrant.warrantStateCode ===
            this.filters.workflowState.warrantStateCode
        );
        this.noOfFilters++;
        this.chips.push('Workflow State');
      }

      //Filter by Court
      if (this.filters?.courtName) {
        data = data.filter((warrant) =>
          warrant.courtName
            .toString()
            .includes(this.filters.courtName.courtName)
        );
        this.noOfFilters++;
        this.chips.push('Court');
      }

      //Filter by Print Status
      if (this.filters?.printStatus) {
        data = data.filter((warrant) => {
          if (this.filters.printStatus.status === 'Both') {
            return true;
          }
          return warrant.printStatus === this.filters.printStatus.status;
        });
        this.noOfFilters++;
        this.chips.push('Print Status');
      }

      this.warrants = data;
    });
  }

  removeChip(chip: string) {
    // Remove the chip from the array
    const chipIndex = this.chips.indexOf(chip);

    if (chipIndex !== -1) {
      this.chips.splice(chipIndex, 1);
    }

    switch (chip) {
      case 'Warrant Ref No':
        this.filterFormControls.warrantRefNo.reset();
        break;
      case 'Issue Date':
        this.filterFormControls.issueDateStart.reset();
        this.filterFormControls.issueDateEnd.reset();
        break;
      case 'DL Number':
        this.filterFormControls.dlNo.reset();
        break;
      case 'Offender Name':
        this.filterFormControls.offenderName.reset();
        break;
      case 'Workflow State':
        this.filterFormControls.workflowState.reset();
        break;
      case 'Court':
        this.filterFormControls.courtName.reset();
        break;
      case 'Print Status':
        this.filterFormControls.printStatus.reset();
        break;
      default:
        console.warn('Unexpected chip value:', chip);
        break;
    }
  }

  clearForm() {
    this.filterForm.reset();
    this.noOfFilters = 0;
    this.chips = [];
    this.getWarrantsList();
  }
}
