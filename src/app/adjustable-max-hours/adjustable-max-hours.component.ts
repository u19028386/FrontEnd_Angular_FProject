import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employeetype } from '../shared/employeetype';
import { NgToastService } from 'ng-angular-popup';
import { MaxHour } from '../shared/maxhour';

@Component({
  selector: 'app-adjustable-max-hours',
  templateUrl: './adjustable-max-hours.component.html',
  styleUrls: ['./adjustable-max-hours.component.scss']
})
export class AdjustableMaxHoursComponent {
  maximums: MaxHour[] = [];

  constructor(private dataService: DataService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.getMaximums();
  }

  getMaximums() {
    this.dataService.getMaximums().subscribe((result: MaxHour[]) => {
      this.maximums = result;
    });
  }
}
