import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { AutoComplete } from 'primeng/autocomplete';
import { SEARCH_MENU_LIST } from 'src/app/app.config';

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
  }

  @ViewChild('searchDialogBox') searchDialogBox: ElementRef | undefined;
  isSearchOpen: boolean = false;
  menuItems= SEARCH_MENU_LIST
  selectedmenuItem: any;
  value: any;
  filteredmenuItems: any[] | undefined;
  @ViewChild('searchInput') searchInput: AutoComplete;
  

  ngOnInit() {
    this.prerequisite();
  }

  constructor(
    private commonService: CommonService,
    private router: Router,
    // private renderer: Renderer2
  ) {}

  showDialog() {
    if (this.searchDialogBox) {
      this.isSearchOpen = true;
      setTimeout(() => {
        this.searchInput.focusInput();
      }, 0);
    }
  }

  setupGlobalKeyEvent() {
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

    if (this.selectedmenuItem.routerLink) {
      this.router.navigate(this.selectedmenuItem.routerLink);
      console.log('emitted');
      this.isSearchOpen = false; //close the search dialog
    }
  }

  onSearchRender() {
    this.value = '';
  }
}
