import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../Car';
import { faSort, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  faTrash = faTrash;
  faSort = faSort;
  faPen = faPen;
  reverse: boolean = false;
  key!: string;
  showUpdateComponent!: boolean;
  toggleUpdatesSubscription!: Subscription;

  constructor(private carService: CarService, private uiService: UiService) {
    this.toggleUpdatesSubscription = this.uiService
      .onToggleUpdate()
      .subscribe((value) => (this.showUpdateComponent = value[0]));
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => (this.cars = cars));
  }

  deleteCar(car: Car) {
    this.carService
      .deleteCar(car)
      .subscribe(() => (this.cars = this.cars.filter((c) => c.id !== car.id)));
  }

  addCar(car: Car) {
    this.carService.addCar(car).subscribe((car) => this.cars.push(car));
  }

  updateCar(car: Car) {
    this.carService.updateCar(car).subscribe();
    this.ngOnInit();
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  filterByModel(filteredValue: string) {
    if (filteredValue.length > 0) {
      this.carService
        .getCars()
        .subscribe(
          (cars) =>
            (this.cars = cars.filter((car) =>
              car.model.includes(filteredValue)
            ))
        );
    } else {
      this.ngOnInit();
    }
  }

  toggleShowUpdateComponent(
    brand: string,
    model: string,
    productionYear: number,
    id: number
  ) {
    this.uiService.toggleShowUpdateComponent(brand, model, productionYear, id);
  }
}
