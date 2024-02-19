
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Resourcetype } from '../shared/resourcetype';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-resourcetype',
  templateUrl: './add-resourcetype.component.html',
  styleUrls: ['./add-resourcetype.component.scss']
})
export class AddResourceTypeComponent implements OnInit {
  resourcetypeForm = new FormGroup({
    resourceTypeName: new FormControl('', Validators.required),
    resourceTypeDescription: new FormControl('', Validators.required)
  });

  existingResourceTypeNames: string[] = [];
  isSubmitted: boolean = false;

  constructor(private dataService: DataService, 
              private router: Router, 
              private toast: NgToastService, 
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getExistingResourceTypeNames();
  
  }

  getExistingResourceTypeNames() {
    this.dataService.getResourceTypes().subscribe((resourceTypes: Resourcetype[]) => {
      this.existingResourceTypeNames = resourceTypes
        .map((rtype) => rtype.resourceTypeName)
        .filter((name) => name !== null) as string[];
    });
  }

  cancel() {
    this.router.navigate(['/resourcetype']);
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.resourcetypeForm.invalid) {
      return;
    }

    const resourceTypeName: string = this.resourcetypeForm.get('resourceTypeName')?.value || '';
    const resourceTypeDescription: string = this.resourcetypeForm.get('resourceTypeDescription')?.value || '';

    if (this.existingResourceTypeNames.includes(resourceTypeName)) {
      this.toast.error({ detail: 'Error Message', summary: 'Resource type name already exists. Please enter a unique name.', duration: 5000 });
  
      return;
    }

    const resourceType: Resourcetype = {
        resourceTypeId: 0,
        resourceTypeName: resourceTypeName,
        resourceTypeDescription: resourceTypeDescription
     
    };

    this.dataService.addResourceType(resourceType).subscribe((result) => {
      this.toast.success({ detail: 'Success Message', summary: 'Resource type added succcessfully', duration: 5000 });
      this.router.navigate(['/resourcetype']);
    },
    error => {
      this.toast.error({ detail: 'Error Message', summary: 'Resource type could not be added.', duration: 5000 });
     
    });
  }
}
