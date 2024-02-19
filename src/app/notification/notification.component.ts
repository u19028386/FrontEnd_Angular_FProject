// import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-notification',
//   templateUrl: './notification.component.html',
//   styleUrls: ['./notification.component.scss']
// })

// export class NotificationComponent implements OnInit {

//   constructor(private toastr: ToastrService) { }

//   // ngOnInit() {
//   // }

//   // showNotification(message: string) {
//   //   this.toastr.info(message, 'Event Alert');
//   // }

// }
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  @Input() message!: string;
  private intervalId: any;
  constructor() { }

  
    
  
    ngOnInit() {
      // const reminderTime = moment().day(4).hour(9).minute(12).second(0); // Thursday, 10:00 AM
      // const currentTime = moment();
  
      // if (currentTime.isAfter(reminderTime)) {
      //   reminderTime.add(1, 'week'); // If the current time is already past the reminder time, set it for the next week
      // }
  
      // const timeDiff = reminderTime.diff(currentTime); // Calculate the time difference between current time and reminder time
  
      // this.intervalId = setInterval(() => {
      //   this.showReminder();
      // }, timeDiff);
    }
  
    ngOnDestroy() {
      // clearInterval(this.intervalId);
    }
  
    showReminder() {
      // Implement your alert notification code here
      // alert('This is your reminder!');
    }
  }
  

