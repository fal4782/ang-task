import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

// Application Components
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';


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
        AppMainComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        // CountryService, CustomerService, EventService, IconService, NodeService,
        // PhotoService, ProductService, 
        MenuService, 
        // BreadcrumbService
    ],
    bootstrap: [AppComponent]
})



export class AppModule {
   
 }
