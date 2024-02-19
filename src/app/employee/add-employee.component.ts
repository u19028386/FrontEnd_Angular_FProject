import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { User } from '../shared/user';
import { Employeetype } from '../shared/employeetype';
import { Employeestatus } from '../shared/employeestatus';
import { Region } from '../shared/region';
import { Division } from '../shared/division';
import { Managertype } from '../shared/managertype';
import { Resource } from '../shared/resource';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee2 } from '../shared/Employee2';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
 

  employeeForm: FormGroup;
  existingUserIds: Number[] = [];
  existingEmployeeUserIds: Number[] = [];
  existingUserNames: string[] = [];
  employees: Employee2[] = [];
  users: User[] = [];
  employeeTypes: Employeetype[] = [];
  employeeStatuses: Employeestatus[] = [];
  regions: Region[] = [];
  divisions: Division[] = [];
  managerTypes: Managertype[] = [];
  resources: Resource[] = [];
  isSubmitted: boolean = false;
  filteredUsers: User[] = [];
  selectedUser: any;
  noMatchesFound: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private toast: NgToastService,
    private formBuilder: FormBuilder
  ) {
    this.employeeForm = this.formBuilder.group({
      userId: ['', Validators.required],
      resourceId: ['', Validators.required],
      employeeTypeId: ['', Validators.required],
      employeeStatusId: ['', Validators.required],
      regionId: ['', Validators.required],
      divisionId: ['', Validators.required],
      managerTypeId: ['']
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.getEmployeeTypes();
    this.getEmployeeStatuses();
    this.getRegions();
    this.getDivisions();
    this.getManagerTypes();
    this.getResources();
    this.getEmployees();
    this.getExistingEmployeeUserIds();
    this.onEmployeeTypeChange();
    this.filteredUsers = [...this.users];
  }

  filterUsers(event: Event) {
    const searchTerm = (event.target as HTMLInputElement)?.value || '';
    this.filteredUsers = this.users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    this.noMatchesFound = this.filteredUsers.length === 0;
  }

  
onUserSelected(user: any) {
this.selectedUser = user;
(this.employeeForm.get('userId') as FormControl).setValue(`${user.firstName} ${user.lastName}`);
}


  
  onEmployeeTypeChange() {
    const selectedEmployeeType = this.employeeForm.get('employeeTypeId')?.value;
  
    // checking for consultant becasue ID is 2
    if (selectedEmployeeType === '2') {
      this.employeeForm.get('managerTypeId')?.disable();
    } 
    
    else {
      this.employeeForm.get('managerTypeId')?.enable();
    }
  }
  



  getUsers() {
    this.dataService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.existingUserIds = users.map(user => user.userId);
      this.existingUserNames = users.map(user => `${user.firstName} ${user.lastName}`);
      console.log(this.existingUserIds);
    });
  }

  getExistingEmployeeUserIds() {
    this.dataService.getEmployees().subscribe((employees: Employee[]) => {
      this.existingEmployeeUserIds = employees
        .map((employee) => employee.userId)
        .filter((Id) => Id !== null) as number[];
    });
  }

  getEmployees() {
    this.dataService.getEmployees().subscribe((eemployees: Employee2[]) => {
      this.employees = eemployees;
    });

    this.existingEmployeeUserIds = this.employees.map(employee => employee.userId);
  }

  getResources() {
    this.dataService.getResources().subscribe((resources: Resource[]) => {
      this.resources = resources;
    });
  }

  getRegions() {
    this.dataService.getRegions().subscribe((regions: Region[]) => {
      this.regions = regions;
    });
  }

  getDivisions() {
    this.dataService.getDivisions().subscribe((divisions: Division[]) => {
      this.divisions = divisions;
    });
  }

  getManagerTypes() {
    this.dataService.getManagerTypes().subscribe((managerTypes: Managertype[]) => {
      this.managerTypes = managerTypes;
    });
  }

  getEmployeeStatuses() {
    this.dataService.getEmployeeStatuses().subscribe((employeeStatuses: Employeestatus[]) => {
      this.employeeStatuses = employeeStatuses;
    });
  }

  getEmployeeTypes() {
    this.dataService.getEmployeeTypes().subscribe((employeeTypes: Employeetype[]) => {
      this.employeeTypes = employeeTypes;
    });
  }

  cancel() {
    this.router.navigate(['/employees']);
  }



  onSubmit() {
    this.isSubmitted = true;

    if (this.employeeForm.invalid) {
      return;
    }

    const userId: number = parseInt(this.employeeForm.get('userId')?.value ?? '0', 10);
    const resourceId: number = parseInt(this.employeeForm.get('resourceId')?.value ?? '0', 10);
    const regionId: number = parseInt(this.employeeForm.get('regionId')?.value ?? '0', 10);
    const divisionId: number = parseInt(this.employeeForm.get('divisionId')?.value ?? '0', 10);
    const managerTypeId: number = parseInt(this.employeeForm.get('managerTypeId')?.value ?? '0', 10);
    const employeeStatusId: number = parseInt(this.employeeForm.get('employeeStatusId')?.value ?? '0', 10);
    const employeeTypeId: number = parseInt(this.employeeForm.get('employeeTypeId')?.value ?? '0', 10);

    if (this.existingEmployeeUserIds.includes(userId)) {
      this.toast.error({
        detail: 'Error Message',
        summary: 'User already exists as an employee. Please pick another user.',
        duration: 5000
      });

      return;
    }

    const employee: Employee2 = {
      employeeId: 0,
      userId: userId,
      resourceId: resourceId,
      regionId: regionId,
      divisionId: divisionId,
      managerTypeId: managerTypeId,
      employeeStatusId: employeeStatusId,
      employeeTypeId: employeeTypeId
    };

    this.dataService.addEmployee(employee).subscribe(
      (result) => {
        this.toast.success({
          detail: 'Success Message',
          summary: 'Employee added successfully.',
          duration: 5000
        });
        this.router.navigate(['/employees']);
      },
      (error) => {
        this.toast.error({
          detail: 'Error Message',
          summary: 'Employee could not be added.',
          duration: 5000
        });
      }
    );
  }

  
}