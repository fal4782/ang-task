import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppComponent,
                children: []
            },
            // {path: 'error', component: AppErrorComponent},
            // {path: 'access', component: AppAccessdeniedComponent},
            // {path: 'notfound', component: AppNotfoundComponent},
            // {path: 'login', component: AppLoginComponent},
            // {path: 'wizard', component: AppWizardComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
