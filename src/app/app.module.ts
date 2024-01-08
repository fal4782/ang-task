import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

// Application Components
import {AppComponent} from './app.component';


// Application services
import { MenuService } from './base/services/menu.service';
import { ContentModule } from './content/content.module';
import { BaseModule } from './base/base.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ContentModule,
        BaseModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        MenuService
    ],
    bootstrap: [AppComponent]
})



export class AppModule {
   
 }
