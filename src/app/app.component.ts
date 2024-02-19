import { Component,Renderer2, ElementRef , ViewChild, OnInit, Input } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // for notification
  @ViewChild(NotificationComponent, { static: true })
  private notificationComponent!: NotificationComponent;
  //end
  title = 'NewEmployeeCalendar';
  showWarning: boolean = false;
  timeoutId: any;
  showAlert: boolean = false;
  

  notificationMessage!: string;

  showReminder: boolean = false;

 
  showToast: boolean = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private toast: NgToastService) {
   
    this.resetTimer();

     ['mousemove', 'mousedown', 'keypress', 'touchstart'].forEach((event) => {
       this.renderer.listen('window', event, () => this.resetTimer());
     });
   }

   resetTimer() {
     clearTimeout(this.timeoutId);
     this.showWarning = false;

     this.timeoutId = setTimeout(() => {
       this.showWarning = true;
     }, 600000); // 10 minutes
 }


ngOnInit() {

}

hideToast() {
  this.showToast = false;
 }
}
