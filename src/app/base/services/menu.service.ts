import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MenuService {

    private menuSource = new Subject<string>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(key: string) { //notify subscribers(menu items) about 
        this.menuSource.next(key);   // changes in menu state by emitting                                      // corresponding key
    }                                // corresponding key

    reset() {
        this.resetSource.next(true); //trigger reset event
    }   
    
}
