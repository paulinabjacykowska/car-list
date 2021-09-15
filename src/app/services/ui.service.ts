import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showModelFilters: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleShowModelFilters(): void {
    this.showModelFilters = !this.showModelFilters;
    this.subject.next(this.showModelFilters);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
