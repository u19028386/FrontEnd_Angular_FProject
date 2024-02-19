import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EventAlertService {

  constructor(private toastr: ToastrService) { }

  scheduleEventAlert() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek === 4) { 
      this.toastr.info('Your weekly event is coming up!', 'Event Alert');
    }
  }
}
