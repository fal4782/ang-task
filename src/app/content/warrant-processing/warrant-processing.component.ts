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
  courtNames: CourtName[];
  allPrintStatus: any[];
  warrants: Warrant[];
  selectedWarrant!: Warrant;
  primaryBgColor: any = '#2196F3'; //initital blue
  primaryTextColor: any = 'white';
  filters: any;
  noOfFilters = 0;
  chips: any[];

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private dateService: DateService
  ) {}
  prerequisite() {
    this.workflowStates = [
      { warrantStateCode: 395, warrantState: 'Vacate order' },
      { warrantStateCode: 330, warrantState: 'Received By police' },
    ];

    this.courtNames = [
      { courtName: 'Kingston Parish Court' },
      { courtName: 'Kingston Jewish Court' },
    ];

    this.allPrintStatus = [
      { status: 'Printed', key: 'P' },
      { status: 'Not Printed', key: 'NP' },
      { status: 'Both', key: 'B' },
    ];

    this.createFilterForm();
    this.getWarrantsList();
  }

  ngOnInit() {
    this.prerequisite();
  }

  //need to find another hook to do this
  ngDoCheck() {
    this.setSiteTheme();
  }

  setSiteTheme() {
    this.primaryBgColor = JSON.parse(localStorage.getItem('siteTheme'));

    if (
      this.primaryBgColor.theme === 'lime' ||
      this.primaryBgColor.theme === 'yellow'
    ) {
      this.primaryTextColor = 'black';
    } else {
      this.primaryTextColor = 'white';
    }

    // Apply the color to a CSS variable
    document.documentElement.style.setProperty(
      '--primary-bg-color',
      this.primaryBgColor.color
    );
    document.documentElement.style.setProperty(
      '--primary-text-color',
      this.primaryTextColor
    );
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
      selectedCity: [],
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

    this.noOfFilters = 0; //reset for every form submission
    this.chips = [];
    this.getWarrantsList();
    console.log('chips', this.chips);
  }

  getWarrantsList() {
    this.commonService.getWarrantsData().subscribe((data) => {
      console.log('getting warrants list');

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

      //Filter by Court
      if (this.filters?.courtName) {
        data = data.filter((warrant) =>
          warrant.courtName.toString().includes(this.filters.courtName)
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
    console.log('chip clicked: ', chip);

    const index = this.chips.indexOf(chip);
    console.log('index of chip clicked: ', index);

    if (index !== -1) {
      this.chips.splice(index, 1);
      console.log('chips after slicing: ', this.chips);

      // Clear the specific form control associated with the removed chip
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
        case 'Court':
          this.filterFormControls.courtName.reset();
          break;
        case 'Print Status':
          this.filterFormControls.printStatus.reset();
          break;
        // Add additional cases for other chips if needed
      }

      this.noOfFilters--;
      this.getWarrantsList();
    }
  }

  clearForm() {
    this.filterForm.reset();
    this.noOfFilters = 0;
    this.chips = [];
    this.getWarrantsList();
  }
}
