import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  warrantsUrl = '/assets/warrant-processing.json';

  constructor(private http: HttpClient) {}

  getStoredTheme(): string {
    const storedTheme = localStorage.getItem('siteTheme');
    return storedTheme ? JSON.parse(storedTheme) : null;
  }

  applyThemeStyles(theme: string, color: string) {
    let textColor: string;

    if (theme === 'lime' || theme === 'yellow') {
      textColor = 'black';
    } else {
      textColor = 'white';
    }

    document.documentElement.style.setProperty('--primary-bg-color', color);
    document.documentElement.style.setProperty('--primary-text-color', textColor);
  }

  getWarrantsData(): Observable<any> {
    return this.http.get<any>(this.warrantsUrl);
  }
}
