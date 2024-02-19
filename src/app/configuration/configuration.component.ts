import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent{
  isShown: boolean = false;
  customTimer: number = 0;
  timer: any;

  constructor(
    private toastr: NgToastService
  ) {}

  ngOnInit() {
    this.startToastInterval();
  }

  // startToastInterval() {
  //   // Clear any existing timer
  //   if (this.timer) {
  //     clearInterval(this.timer);
  //   }

  //   if (this.customTimer <= 0) {
  //     this.toastr.error({ detail: 'Error Message', summary: 'Entered time cannot be negative or equal to 0.', duration: 5000 });
  //     return; // Stop execution if negative
  //   } 
  //   // Calculate the delay in milliseconds based on customHours (converted to hours)
  //   const delay = this.customTimer * 60 * 60 * 1000;

  //   // Set an interval to show the toast message with the specified delay
  //   this.timer = setInterval(() => {
  //     this.toastr.info({ detail: 'Reminder', summary: 'Please capture your time.', duration: 5000 });
  //   }, delay);
  // }


  // use this for testing in seconds for exam
  startToastInterval() {
    // Clear any existing timer
    if (this.timer) {
      clearInterval(this.timer);
    }

  if (this.customTimer <= 0) {
    this.toastr.error({ detail: 'Error Message', summary: 'Entered time cannot be negative or equal to 0.', duration: 5000 });
    return; // Stop execution if negative
  } 

    // Set an interval to show the toast message with the specified delay
    this.timer = setInterval(() => {
      this.toastr.info({ detail: 'Reminder', summary: 'Please capture your time.', duration: 1000 });
    }, this.customTimer * 1000); // Convert customTimer to milliseconds
  }

  updateTimer() {
    this.startToastInterval(); // Restart the interval with the new customTimer value
    this.toastr.success({ detail: 'Success Message', summary: 'Timer updated successfully.', duration: 1000 });
  }
  
  
}
