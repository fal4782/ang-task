// date.service.ts
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  formatDate(date: Date, format: string = 'DD.MM.YYYY'): string {
    return moment(date).format(format);
  }

  convertToUnixTimestamp(date: Date): number {
    return moment(date).valueOf();
  }
}
