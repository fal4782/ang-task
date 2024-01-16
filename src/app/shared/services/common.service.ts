import { EventEmitter, Injectable, Output } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
    
  @Output() keepMenuOpenAfterNavigation: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
