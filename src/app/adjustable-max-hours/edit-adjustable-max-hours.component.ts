import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { MaxHour } from '../shared/maxhour';
import { NgToastService } from 'ng-angular-popup';
import { EditConfirmationModalComponent } from '../edit-confirmation-modal/edit-confirmation-modal.component';
import { AbstractControl, ValidationErrors } from '@angular/forms';

function validateNonNegativeNumber(control: AbstractControl): ValidationErrors | null {
  const value = control.value as number;

  if (value < 0) {
    return { negativeNumber: true };
  }

  return null;
}

@Component({
  selector: 'app-edit-adjustable-max-hours',
  templateUrl: './edit-adjustable-max-hours.component.html',
  styleUrls: ['./edit-adjustable-max-hours.component.scss']
})
export class EditAdjustableMaxComponent implements OnInit {
    @ViewChild(EditConfirmationModalComponent) editConfirmationModal!: EditConfirmationModalComponent;
  
    maxForm = new FormGroup({
      maxHours: new FormControl(0, [Validators.required, validateNonNegativeNumber]),
    });
    
    maxHour: MaxHour | null = null;
    originalHour!: number ; 
    changesMade = false;
    editMessage: string = 'Are you sure you want to update the hours?';
    itemToEdit: string = '';
    maxHours: MaxHour[] = [];
    displayModal: boolean = false;
  
    constructor(
      private dataService: DataService,
      private router: Router,
      private route: ActivatedRoute,
      private toast: NgToastService
    ) {}
  
    ngOnInit(): void {
     
      this.dataService.getMaximum(+this.route.snapshot.params['id']).subscribe((result) => {
          this.maxHour = result as MaxHour;
          if (this.maxHour) {
  
            this.originalHour = this.maxHour.maxHours;
        
            this.maxForm.patchValue({
              maxHours: this.maxHour.maxHours 

            });
          }
        });
    }

  
    cancel() {
      this.router.navigate(['/max']);
    }
  
    openEditModal() {
        // this.itemToEdit = maxHour.maxHours;
        this.displayModal = true;
      }
  
    closeModal() {
      this.displayModal = false;
    }
  
    editConfirmed() {
      if (!this.maxHour) {
        return;
      }
    
      if (
        this.maxForm.value.maxHours === this.originalHour
   
      ) {
        this.toast.error({ detail: 'Error Message', summary: 'No changes were made to the maximum hour.', duration: 5000 });
        return;
      }

      const newMaxHours = Number(this.maxForm.value.maxHours);

      if (newMaxHours <= 0) {
        this.toast.error({ detail: 'Error Message', summary: 'Maximum hours cannot be less or equal to 0.', duration: 5000 });
        return;
      }
    
      const updatedMax: MaxHour = {
        maxHoursId: this.maxHour.maxHoursId,
        maxHours: Number(this.maxForm.value.maxHours) 
      };
      
    
      this.dataService.editMaxHours(this.maxHour.maxHoursId, updatedMax).subscribe(
        (result) => {
          this.toast.success({ detail: 'Success Message', summary: 'Maximum allocation hours updated successfully', duration: 5000 });
          this.itemToEdit = '';
          this.closeModal();
          this.router.navigate(['/max']);
        },
        (error) => {
          this.toast.error({ detail: 'Error Message', summary: 'Failed to update maximum allocation hours.', duration: 5000 });
         
        }
      );
    }
  }
  
  
