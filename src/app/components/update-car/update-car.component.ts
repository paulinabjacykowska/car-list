import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Car } from '../../Car';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css'],
})
export class UpdateCarComponent implements OnInit {
  @Output() onUpdateCar: EventEmitter<Car> = new EventEmitter();
  showUpdateComponent!: boolean;
  toggleUpdatesSubscription!: Subscription;
  brand!: string;
  model!: string;
  productionYear!: number;
  id!: number;

  constructor(private uiService: UiService) {
    this.toggleUpdatesSubscription = this.uiService
      .onToggleUpdate()
      .subscribe((value) => {
        this.showUpdateComponent = value[0];
        this.brand = value[1];
        this.model = value[2];
        this.productionYear = value[3];
        this.id = value[4];
      });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.brand || !this.model || !this.productionYear) {
      alert('Wypełnij wszystkie pola');
      return;
    }

    const updatedCar = {
      brand: this.brand.toLowerCase(),
      model: this.model.toLowerCase(),
      production_year: this.productionYear,
      id: this.id,
    };

    this.onUpdateCar.emit(updatedCar);

    this.showUpdateComponent = !this.showUpdateComponent;
  }
}
