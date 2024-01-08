import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { ProfileComponent } from './components/profile/profile.component';
import { SiteConfigComponent } from './components/site-config/site-config.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    ProfileComponent,
    SiteConfigComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RadioButtonModule,
    InputSwitchModule,
    FormsModule
  ],
  exports:[
    TopbarComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    ProfileComponent,
    SiteConfigComponent
  ]
})
export class BaseModule { }
