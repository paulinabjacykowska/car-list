import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  @Output() onAddCar: EventEmitter<Car> = new EventEmitter();
  brand!: string;
  model!: string;
  production_year: number = 2000;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.brand || !this.model || !this.production_year) {
      alert('Wypełnij wszystkie pola');
      return;
    }

    const newCar = {
      brand: this.brand.toLowerCase(),
      model: this.model.toLowerCase(),
      production_year: this.production_year,
    };

    this.onAddCar.emit(newCar);

    this.brand = '';
    this.model = '';
    this.production_year = 2000;
  }
}
