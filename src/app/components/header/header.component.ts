import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Lista samochodów';
  showModelFilters?: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService, private carService: CarService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showModelFilters = value));
  }

  ngOnInit(): void {}

  toggleShowModelFilters() {
    this.uiService.toggleShowModelFilters();
  }
}
