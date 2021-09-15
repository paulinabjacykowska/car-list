import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Car } from '../../Car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Output() changeFilter = new EventEmitter();
  cars!: Car[];
  showModelFilters!: boolean;
  toggleFiltersSubscription!: Subscription;

  constructor(private uiService: UiService, private carService: CarService) {
    this.toggleFiltersSubscription = this.uiService
      .onToggleFilters()
      .subscribe((value) => (this.showModelFilters = value));
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => (this.cars = cars));
  }

  onChange(event: KeyboardEvent) {
    const filteredValues = (event.target as HTMLInputElement).value;
    this.changeFilter.emit(filteredValues);
  }
}
