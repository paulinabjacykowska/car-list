import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../Car';
import { faSort, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private carService: CarService) {}

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

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
