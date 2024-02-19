import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Resourcetype } from '../shared/resourcetype';
import { NgToastService } from 'ng-angular-popup';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-resourcetype',
  templateUrl: './resourcetype.component.html',
  styleUrls: ['./resourcetype.component.scss']
})
export class ResourceTypeComponent implements OnInit {
  @ViewChild(DeleteConfirmationModalComponent) deleteConfirmationModal!: DeleteConfirmationModalComponent;

  deleteMessage: string = 'Are you sure you want to delete the item?';
  types: Resourcetype[] = [];
  filtered: Resourcetype[] = [];
  searchName: string = '';
  itemToDelete: string = '';

  constructor(private dataService: DataService, private router: Router, private toast: NgToastService) {}

  ngOnInit(): void {
    this.getResourceTypes();
  }

  getResourceTypes() {
    this.dataService.getResourceTypes().subscribe((result: Resourcetype[]) => {
      this.types = result;
      this.filtered = result;
    });
  }

  openDeleteModal(type: Resourcetype) {
    this.itemToDelete = type.resourceTypeName;
    this.deleteConfirmationModal.openModal(this.itemToDelete);
  }

  deleteConfirmed() {
    if (this.itemToDelete) {
      const typeToDelete = this.types.find((type) => type.resourceTypeName === this.itemToDelete);
      if (typeToDelete) {
        this.dataService.deleteResourceType(typeToDelete.resourceTypeId).subscribe(
          (result) => {
            this.toast.success({ detail: 'Success Message', summary: 'Resource type deleted successfully', duration: 5000 });
          window.location.reload();
          },
          (error) => {
            this.toast.error({ detail: 'Error Message', summary: 'Cannot delete resource type because it linked to a resource.', duration: 5000 });
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
    type.resourceTypeName && type.resourceTypeName.toLowerCase().includes(this.searchName.toLowerCase())

    );

  }
}
