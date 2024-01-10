import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, DialogModule, ButtonModule, AutoCompleteModule, FormsModule],
  exports: [SearchComponent],
})
export class SharedModule {

}
