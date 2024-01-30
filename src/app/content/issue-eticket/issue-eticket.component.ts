import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

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
  customField?: string;
}

@Component({
  selector: 'app-issue-eticket',
  templateUrl: './issue-eticket.component.html',
  styleUrls: ['./issue-eticket.component.scss'],
})
export class IssueEticketComponent {
  warrants: Warrant[];
  selectedWarrants: Warrant[] = [];
  siteTheme: any;

  constructor(private commonService: CommonService) {}

  prerequisite() {
    this.getWarrantsList();
  }

  ngOnInit() {
    this.prerequisite();
  }

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

  getWarrantsList() {
    this.commonService.getWarrantsData().subscribe((data) => {
      this.warrants = data;
      this.warrants = data.map((warrant) => ({ ...warrant, customField: '' }));
    });
  }

  isSelected(warrant: Warrant): boolean {
    return this.selectedWarrants.includes(warrant);
  }
}
