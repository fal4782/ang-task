import { Component } from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-inline-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('menu', [
        state('hiddenAnimated', style({
            height: '0px',
            paddingBottom: '0px'
        })),
        state('visibleAnimated', style({
            height: '*'
        })),
        state('visible', style({
            height: '*',
            'z-index': 100
        })),
        state('hidden', style({
            height: '0px',
            'z-index': '*'
        })),
        transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
        transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})

export class ProfileComponent {
    active: boolean;

    constructor(public appMain: AppComponent) { }

    onClick(event) {
        this.appMain.onInlineMenuClick(event);
        event.preventDefault();
    }
}
