import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ResourceView } from '../shared/resourceview';
import { NgToastService } from 'ng-angular-popup';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  @ViewChild(DeleteConfirmationModalComponent) deleteConfirmationModal!: DeleteConfirmationModalComponent;

  deleteMessage: string = 'Are you sure you want to delete the item?';
  resources: ResourceView[] = [];
  filtered: ResourceView[] = [];
  searchName: string = '';
  resourceId! : number;
  itemToDelete: string = '';

  constructor(private dataService: DataService, private router: Router, private toast: NgToastService) {}

  ngOnInit(): void {
    this.getResources();
  }

  getResources() {
    this.dataService.getResources().subscribe((result: ResourceView[]) => {
      this.resources = result;
      this.filtered = result;
    });
  }

  openDeleteModal(resource: ResourceView) {
    this.itemToDelete = resource.resourceName;
    this.deleteConfirmationModal.openModal(this.itemToDelete);
  }

  deleteConfirmed() {
    if (this.itemToDelete) {
      const resourceToDelete = this.resources.find((resource) => resource.resourceName === this.itemToDelete);
      if (resourceToDelete) {
        this.dataService.deleteResource(resourceToDelete.resourceId).subscribe(
          (result) => {
            this.toast.success({ detail: 'Success Message', summary: 'Resource deleted successfully.', duration: 5000 });
          window.location.reload();
          },
          (error) => {
            this.toast.error({ detail: 'Error Message', summary: 'Cannot delete resource because it linked to an employee.', duration: 5000 });
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
        
          this.filtered = this.resources.filter((resource) =>
          resource.resourceName.toLowerCase().includes(this.searchName.toLowerCase())
          );
        }
        }
        


