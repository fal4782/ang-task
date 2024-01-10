import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IssueEticketComponent } from './content/issue-eticket/issue-eticket.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'ticket/issue', component: IssueEticketComponent },
        // {path: 'error', component: AppErrorComponent},
        // {path: 'access', component: AppAccessdeniedComponent},
        // {path: 'notfound', component: AppNotfoundComponent},
        // {path: 'login', component: AppLoginComponent},
        // {path: 'wizard', component: AppWizardComponent},
        // { path: '**', redirectTo: '/notfound' },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
