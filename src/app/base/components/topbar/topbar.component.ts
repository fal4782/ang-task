import { Component } from '@angular/core';
import { AppComponent} from '../../../app.component';
import { AppMainComponent} from '../../../app.main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    constructor(public app: AppComponent, public appMain: AppMainComponent) {}
}

