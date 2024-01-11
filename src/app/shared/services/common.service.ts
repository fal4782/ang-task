import { EventEmitter, Injectable, Output } from '@angular/core';
import { SEARCH_MENU_LIST } from 'src/app/app.config';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  menuStayOpenAfterNavigation: boolean;
  @Output() keepMenuOpenAfterNavigation: EventEmitter<any> = new EventEmitter()

  constructor() {}

  getMenuData() {
    return [SEARCH_MENU_LIST];
  }

  getMenu() {
    return Promise.resolve(this.getMenuData());
  }
}
