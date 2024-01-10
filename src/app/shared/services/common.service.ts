import { Injectable } from '@angular/core';
import { SEARCH_MENU_LIST } from 'src/app/app.config';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getMenuData(){
    return [ SEARCH_MENU_LIST ]
  }

  getMenu(){
    return Promise.resolve(this.getMenuData())
  }
}
