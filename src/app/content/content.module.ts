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

const contentRoutes: Routes = [
    {path:'ticket/issue',component:IssueEticketComponent}
  ];

@NgModule({
  declarations: [
    HomeComponent,
    AddSuspensionReversalComponent,
    IssueEticketComponent
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
    RouterModule.forChild(contentRoutes)
  ],
  exports:[
    HomeComponent,
    AddSuspensionReversalComponent,
    IssueEticketComponent,
    RouterModule
  ]
})
export class ContentModule { }
