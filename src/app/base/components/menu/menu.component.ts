import { Component } from '@angular/core';
import { MENU_LIST } from 'src/app/app.config';

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
    return items.map((item) => {
      if (item.items) {
        item.items = this.sortItemsAlphabetically(item.items);
      }
      return item;
    }).sort((a, b) => (a.label > b.label ? 1 : -1));
  }

  createMenu() {
    this.model = MENU_LIST
    this.model.forEach((category) => {
        if (category.items) {
          category.items = this.sortItemsAlphabetically(category.items);
        }
      });
  }
}
