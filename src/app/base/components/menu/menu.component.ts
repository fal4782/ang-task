import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  prerequiste() {
    this.createMenu();
  }

  model: any[];

  ngOnInit() {
    this.prerequiste();
  }

  private sortItemsAlphabetically(items: any[]): any[] {
    return items.sort((a, b) => (a.label > b.label ? 1 : -1));
  }

  createMenu() {
    this.model = [
      {
        label: 'Ticket Processing',
        icon: 'pi pi-fw pi-ticket',
        items: [
          { label: 'Issue eTicket', icon: 'pi pi-fw pi-briefcase' },
          { label: 'Manual Ticket', icon: 'pi pi-fw pi-folder' },
          { label: 'Draft Ticket', icon: 'pi pi-fw pi-question-circle' },
          { label: 'Offender Profile', icon: 'pi pi-fw pi-user-minus' },
          { label: 'Ticket Enquiry', icon: 'pi pi-fw pi-filter' },
          { label: 'Cancel/Void Requests', icon: 'pi pi-fw pi-times' },
          { label: 'Edit Requests', icon: 'pi pi-fw pi-pencil' },
        ],
      },
      {
        label: 'Court Processing',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          { label: 'Warrant Processing', icon: 'pi pi-fw pi-mobile' },
          { label: 'Prepare Court Sheet', icon: 'pi pi-fw pi-file' },
          {
            label: 'Assign New Court Date enbloc',
            icon: 'pi pi-fw pi-calendar',
          },
          { label: 'Print Court Sheet', icon: 'pi pi-fw pi-print' },
          { label: 'Update Ticket Details', icon: 'pi pi-fw pi-file-edit' },
          { label: 'Update Court Details', icon: 'pi pi-fw pi-file-edit' },
          { label: 'Court Commitment', icon: 'pi pi-fw pi-tablet' },
          { label: 'Court Appeal', icon: 'pi pi-fw pi-folder-open' },
          {
            label: 'DL Disqualification By Court',
            icon: 'pi pi-fw pi-minus-circle',
          },
        ],
      },
      {
        label: 'Suspension',
        icon: 'pi pi-fw pi-ban',
        items: [
          { label: 'Suspend by Points', icon: 'pi pi-fw pi-eye' },
          {
            label: 'Print Notice of Suspension',
            icon: 'pi pi-fw pi-print',
          },
          {
            label: "Surrendering of Driver's License",
            icon: 'pi pi-fw pi-file',
          },
          {
            label: 'Authorize the Reinstatement of Suspended DL',
            icon: 'pi pi-fw pi-clock',
          },
          {
            label: 'Reissue Notice to TAJ',
            icon: 'pi pi-fw pi-file-export',
            items: [
              {
                label: "Removal of Endorsement on Driver's License",
                icon: 'pi pi-fw pi-eraser',
              },
              {
                label: 'Reversal of Suspension - Add',
                icon: 'pi pi-fw pi-replay',
              },
            ],
          },
        ],
      },
      {
        label: 'Configuration',
        icon: 'pi pi-fw pi-th-large',
      },
      {
        label: 'Reports',
        icon: 'pi pi-fw pi-file-pdf',
        items: [
          {
            label: 'Cashiering',
            icon: 'pi pi-fw pi-server',
            items: [
              {
                label: 'Cashier Daily Settlement',
                icon: 'pi pi-fw pi-times-circle',
              },
              {
                label: 'Manual Payments Receipt Listing',
                icon: 'pi pi-fw pi-database',
              },
              {
                label: 'OTC Receipt Listing',
                icon: 'pi pi-fw pi-times-circle',
              },
            ],
          },
          { label: 'Court Proceedings', icon: 'pi pi-fw pi-eye' },
          { label: 'Disqualifications', icon: 'pi pi-fw pi-eye' },
          { label: 'Payments', icon: 'pi pi-fw pi-server' },
          { label: 'Ticket Processing', icon: 'pi pi-fw pi-server' },
          { label: 'Warrants', icon: 'pi pi-fw pi-eye' },
        ],
      },
      {
        label: 'Utilities',
        icon: 'pi pi-fw pi-cog',
      },
      {
        label: 'Security',
        icon: 'pi pi-fw pi-shield',
      },
    ];
    this.model.forEach((category) => {
        if (category.items) {
          category.items = this.sortItemsAlphabetically(category.items);
        }
      })
  }
}
