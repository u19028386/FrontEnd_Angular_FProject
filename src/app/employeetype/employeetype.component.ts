import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employeetype } from '../shared/employeetype';
import { NgToastService } from 'ng-angular-popup';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-employeetype',
  templateUrl: './employeetype.component.html',
  styleUrls: ['./employeetype.component.scss'],
})
export class EmployeeTypeComponent implements OnInit {
  @ViewChild(DeleteConfirmationModalComponent) deleteConfirmationModal!: DeleteConfirmationModalComponent;

  deleteMessage: string = 'Are you sure you want to delete the item?';
  types: Employeetype[] = [];
  filtered: Employeetype[] = [];
  searchName: string = '';
  itemToDelete: string = '';

  constructor(private dataService: DataService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.getEmployeeTypes();
  }

  getEmployeeTypes() {
    this.dataService.getEmployeeTypes().subscribe((result: Employeetype[]) => {
      this.types = result;
      this.filtered = result;
    });
  }

  openDeleteModal(employeetype: Employeetype) {
    this.itemToDelete = employeetype.employeeTypeName;
    this.deleteConfirmationModal.openModal(this.itemToDelete);
  }

  deleteConfirmed() {
    if (this.itemToDelete) {
      const employeetypeToDelete = this.types.find((type) => type.employeeTypeName === this.itemToDelete);
      if (employeetypeToDelete) {
        this.dataService.deleteEmployeeType(employeetypeToDelete.employeeTypeId).subscribe(
          (result) => {
            this.toast.success({ detail: 'Success Message', summary: 'Employee type deleted successfully.', duration: 5000 });
            this.getEmployeeTypes();
          },
          (error) => {
            this.toast.error({ detail: 'Error Message', summary: 'Cannot delete employee because it linked to an employee.', duration: 5000 });
          }
        );
      }
    }

    this.itemToDelete = '';
  }

  search(): void {
        if (!this.searchName) {
          this.toast.error({ detail: 'Error Message', summary: 'Please enter a search term.', duration: 5000 });
          return;
        }
      
        this.filtered = this.types.filter((type) =>
        type.employeeTypeName && type.employeeTypeName.toLowerCase().includes(this.searchName.toLowerCase())
    
        );
    
      }

      
}

