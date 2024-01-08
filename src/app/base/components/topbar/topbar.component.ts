import { Component } from '@angular/core';
import { AppComponent} from '../../../app.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    constructor(public appMain: AppComponent) {}
}

