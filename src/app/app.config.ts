export const MENU_LIST = [
  {
    label: 'Ticket Processing', //for all other menu
    icon: 'pi pi-fw pi-ticket',
    items: [
      {
        label: 'Ticket Processing', //for static menu
        icon: 'pi pi-fw pi-ticket',
        routerLink: ['/ticket'],

        items: [
          {
            label: 'Issue eTicket',
            icon: 'pi pi-fw pi-briefcase',
            routerLink: ['/ticket/issue'],
          },
          { label: 'Manual Ticket', icon: 'pi pi-fw pi-folder' },
          { label: 'Draft Ticket', icon: 'pi pi-fw pi-question-circle' },
          { label: 'Offender Profile', icon: 'pi pi-fw pi-user-minus' },
          { label: 'Ticket Enquiry', icon: 'pi pi-fw pi-filter' },
          { label: 'Cancel/Void Requests', icon: 'pi pi-fw pi-times' },
          { label: 'Edit Requests', icon: 'pi pi-fw pi-pencil' },
        ],
      },
    ],
  },
  {
    label: 'Court Processing', //for all other menu
    icon: 'pi pi-fw pi-briefcase',
    items: [
      {
        label: 'Court Processing', //for static menu
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
    ],
  },
  {
    label: 'Suspension', //for all other menu
    icon: 'pi pi-fw pi-ban',
    items: [
      {
        label: 'Suspension', //for static menu
        icon: 'pi pi-fw pi-ban',
        routerLink: ['/suspension'],
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
            routerLink: ['/suspension/reissue-notice-to-taj'],
            items: [
              {
                label: "Removal of Endorsement on Driver's License",
                icon: 'pi pi-fw pi-eraser',
              },
              {
                label: 'Reversal of Suspension - Add',
                icon: 'pi pi-fw pi-replay',
                routerLink: [
                  '/suspension/reissue-notice-to-taj/reveral-of-suspension-add',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Configuration', //for all other menus
    icon: 'pi pi-fw pi-th-large',
    items: [
      {
        label: 'Configuration', //for static menu
        icon: 'pi pi-fw pi-th-large',
      },
    ],
  },
  {
    label: 'Reports',
    icon: 'pi pi-fw pi-file-pdf',
    items: [
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
          { label: 'Warrants', icon: 'pi pi-fw pi-eye' },
        ],
      },
    ],
  },
  {
    label: 'Utilities',
    icon: 'pi pi-fw pi-cog',
    items: [
      {
        label: 'Utilities',
        icon: 'pi pi-fw pi-cog',
      },
    ],
  },
  {
    label: 'Security',
    icon: 'pi pi-fw pi-shield',
    items: [
      {
        label: 'Security',
        icon: 'pi pi-fw pi-cog',
      },
    ],
  },
];

export const SEARCH_MENU_LIST = [
  {
    label: 'Issue eTicket',
    routerLink: ['/ticket/issue'],
    parentMenuItem: 'Ticket Processing',
  },
  {
    label: 'Manual Ticket',
    parentMenuItem: 'Ticket Processing',
  },
  {
    label: 'Draft Ticket',
    parentMenuItem: 'Ticket Processing',
  },
  {
    label: 'Offender Profile',
    parentMenuItem: 'Ticket Processing',
  },
  {
    label: 'Ticket Enquiry',
    parentMenuItem: 'Ticket Processing',
  },
  {
    label: 'Cancel/Void Requests',
    parentMenuItem: 'Ticket Processing',
  },
  {
    label: 'Edit Requests',
    parentMenuItem: 'Ticket Processing',
  },
  { label: 'Warrant Processing', parentMenuItem: 'Court Processing' },
  { label: 'Prepare Court Sheet', parentMenuItem: 'Court Processing' },
  { label: 'Assign New Court Date enbloc', parentMenuItem: 'Court Processing' },
  { label: 'Print Court Sheet', parentMenuItem: 'Court Processing' },
  { label: 'Update Ticket Details', parentMenuItem: 'Court Processing' },
  { label: 'Update Court Details', parentMenuItem: 'Court Processing' },
  { label: 'Court Commitment', parentMenuItem: 'Court Processing' },
  { label: 'Court Appeal', parentMenuItem: 'Court Processing' },
  { label: 'DL Disqualification By Court', parentMenuItem: 'Court Processing' },
  { label: 'Suspend by Points', parentMenuItem: 'Suspension' },
  {
    label: 'Print Notice of Suspension',
    parentMenuItem: 'Suspension',
  },
  {
    label: "Surrendering of Driver's License",
    parentMenuItem: 'Suspension',
  },
  {
    label: 'Authorize the Reinstatement of Suspended DL',
    parentMenuItem: 'Suspension',
  },
  {
    label: 'Reissue Notice To TAJ',
    parentMenuItem: 'Suspension',
  },
  {
    label: "Removal of Endorsement on Driver's License",
    parentMenuItem: 'Reissue Notice to TAJ',
  },
  {
    label: 'Reversal of Suspension - Add',
    routerLink: ['/suspension/reissue-notice-to-taj/reveral-of-suspension-add'],
    parentMenuItem: 'Reissue Notice to TAJ',
  },
  {
    label: 'Configuration',
    parentMenuItem: 'root',
  },

  {
    label: 'Cashiering',
    parentMenuItem: 'Reports',
  },

  {
    label: 'Cashier Daily Settlement',
    parentMenuItem: 'Cashiering',
  },
  {
    label: 'Manual Payments Receipt Listing',
    parentMenuItem: 'Cashiering',
  },
  {
    label: 'OTC Receipt Listing',
    parentMenuItem: 'Cashiering',
  },

  { label: 'Court Proceedings', parentMenuItem: 'Reports' },
  { label: 'Disqualifications', parentMenuItem: 'Reports' },
  { label: 'Payments', parentMenuItem: 'Reports' },
  { label: 'Warrants', parentMenuItem: 'Reports' },
  {
    label: 'Utilities',
    parentMenuItem: 'root',
  },
  {
    label: 'Security',
    parentMenuItem: 'root',
  },
];
