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
import {RouterModule, Routes} from '@angular/router';
import { IssueEticketComponent } from './issue-eticket/issue-eticket.component';
import { FormsModule } from '@angular/forms';
import { WarrantProcessingComponent } from './warrant-processing/warrant-processing.component';

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
  ],
  exports:[
    HomeComponent,
    AddSuspensionReversalComponent,
    IssueEticketComponent,
    WarrantProcessingComponent
  ]
})
export class ContentModule { }
