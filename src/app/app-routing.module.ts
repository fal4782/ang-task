import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IssueEticketComponent } from './content/issue-eticket/issue-eticket.component';
import { AddSuspensionReversalComponent } from './content/add-suspension-reversal/add-suspension-reversal.component';
import { HomeComponent } from './content/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent},
        { path: 'ticket/issue', component: IssueEticketComponent },
        { path: 'suspension/reissue-notice-to-taj/reveral-of-suspension-add',component: AddSuspensionReversalComponent}
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
