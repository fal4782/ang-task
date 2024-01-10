import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  prerequisite() {
    this.setupGlobalKeyEvent();

    this.commonService.getMenu().then((menu) => {
      this.menuItems = menu[0];
    });
  }

  @ViewChild('searchDialogBox') searchDialogBox: ElementRef | undefined;
  isSearchOpen: boolean = false;
  menuItems: any[] | undefined;
  selectedmenuItem: any;
  value: any;
  filteredmenuItems: any[] | undefined;

  ngOnInit() {
    this.prerequisite();
  }

  showDialog() {
    if (this.searchDialogBox) {
      this.isSearchOpen = true;
    }
  }

  constructor(private commonService: CommonService, private router: Router) {}

  private setupGlobalKeyEvent() {
    window.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        this.showDialog();
      }
    });
  }

  filtermenuItem(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.menuItems as any[]).length; i++) {
      let menu = (this.menuItems as any[])[i];

      if (menu.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(menu);
      }
    }

    this.filteredmenuItems = filtered;
  }

  getSelectedMenuItem(event: any) {
    this.selectedmenuItem = event;
    console.log(this.selectedmenuItem);

    if (this.selectedmenuItem.routerLink) {
      console.log(this.selectedmenuItem.routerLink);
      this.router.navigate(this.selectedmenuItem.routerLink);
      this.isSearchOpen = false;
    }
  }

  onSearchRender() { //not working
    this.value = ''; // need to clear autocomplete input when dialog closes
  }
}
