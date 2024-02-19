import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Projectview } from '../shared/projectview';
import { NgToastService } from 'ng-angular-popup';
import { ProjectAllocationView } from '../shared/projectAllocationView';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; 
import { ProjectAllocation } from '../shared/projectAllocation';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @ViewChild(DeleteConfirmationModalComponent) deleteConfirmationModal!: DeleteConfirmationModalComponent;

  deleteMessage: string = 'Are you sure you want to delete the item?';
  projects : Projectview [] = [];
  filtered: Projectview[] = [];
  searchName: string = '';
  projectId! : number;
  projectAllocations : ProjectAllocation[] = [];
  itemToDelete: string = '';

  constructor(private dataService: DataService, private router: Router, private toast: NgToastService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.dataService.getProjects().subscribe((result: Projectview[]) => {
      this.projects = result;
      this.filtered = result;
    });
  }

  openDeleteModal(project: Projectview) {
    this.itemToDelete = project.projectName;
    this.deleteConfirmationModal.openModal(this.itemToDelete);
  }

  deleteConfirmed() {
    if (this.itemToDelete) {
      const projectToDelete = this.projects.find((project) => project.projectName === this.itemToDelete);
      if (projectToDelete) {
        this.dataService.deleteProject(projectToDelete.projectId).subscribe(
          (result) => {
            this.toast.success({ detail: 'Success Message', summary: 'Project deleted successfully', duration: 5000 });
          window.location.reload();
          },
          (error) => {
            this.toast.error({ detail: 'Error Message', summary: 'Cannot delete project because it is allocated to an employee', duration: 5000 });
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
        
          this.filtered = this.projects.filter((project) =>
          project.projectName.toLowerCase().includes(this.searchName.toLowerCase())
          );
        }

     
   
      
   }