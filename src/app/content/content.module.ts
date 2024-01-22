import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { AddSuspensionReversalComponent } from './add-suspension-reversal/add-suspension-reversal.component';
import { IssueEticketComponent } from './issue-eticket/issue-eticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarrantProcessingComponent } from './warrant-processing/warrant-processing.component';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    AddSuspensionReversalComponent,
    IssueEticketComponent,
    WarrantProcessingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    ChartModule,
    FileUploadModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsetModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    ChipModule,
    TableModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent,
    AddSuspensionReversalComponent,
    IssueEticketComponent,
    WarrantProcessingComponent
  ]
})
export class ContentModule { }
