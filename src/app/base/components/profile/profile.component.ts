import { Component } from '@angular/core';
import { AppMainComponent } from 'src/app/app.main.component';
import {trigger, state, transition, style, animate} from '@angular/animations';


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

    constructor(public appMain: AppMainComponent) { }

    onClick(event) {
        this.appMain.onInlineMenuClick(event);
        event.preventDefault();
    }
}
