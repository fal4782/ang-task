import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuItemContent, MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
  ],
  exports:[
    TopbarComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent
  ]
})
export class BaseModule { }
