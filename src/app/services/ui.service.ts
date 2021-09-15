import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from '../Car';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showModelFilters: boolean = false;
  private showUpdateComponent: boolean = false;
  private modelFiltersSubject = new Subject<any>();
  private UpdateComponentSubject = new Subject<any>();

  constructor() {}

  toggleShowModelFilters(): void {
    this.showModelFilters = !this.showModelFilters;
    this.modelFiltersSubject.next(this.showModelFilters);
  }

  toggleShowUpdateComponent(
    brand: string,
    model: string,
    productionYear: number,
    id: number
  ): void {
    this.showUpdateComponent = !this.showUpdateComponent;
    this.UpdateComponentSubject.next([
      this.showUpdateComponent,
      brand,
      model,
      productionYear,
      id,
    ]);
  }

  onToggleFilters(): Observable<any> {
    return this.modelFiltersSubject.asObservable();
  }

  onToggleUpdate(): Observable<any> {
    return this.UpdateComponentSubject.asObservable();
  }
}
