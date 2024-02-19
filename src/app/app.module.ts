// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MyCalendarComponent } from './my-calendar/my-calendar.component';
// import { FormsModule } from '@angular/forms';
// import { ChunkPipe } from './pipes/chunk.pipe';
// import { InactiveWarningComponent } from './inactive-warning/inactive-warning.component';
// import { LoginComponent } from './login/login.component';
// import { Ng2SearchPipe } from 'ng2-search-filter';


// @NgModule({
//   declarations: [
//     AppComponent,
//     MyCalendarComponent,
//     ChunkPipe,
//     InactiveWarningComponent,
//     LoginComponent
 

//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     Ng2SearchPipe
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule} from '@angular/core';
// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { FormsModule } from '@angular/forms';
import { ChunkPipe } from './pipes/chunk.pipe';
import { InactiveWarningComponent } from './inactive-warning/inactive-warning.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EmployeeTypeComponent } from './employeetype/employeetype.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeTypeComponent } from './employeetype/add-employeetype.component';
import { EditEmployeeTypeComponent } from './employeetype/edit-employeetype.component';
// import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './notification/notification.component';
// import { NgToastModule } from 'ng-angular-popup';
import { NgToastModule } from 'ng-angular-popup';
// import { RemindertoastComponent } from './remindertoast/remindertoast.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewemployeeComponent } from './employee/viewemployee.component';


import { AlertComponent } from './alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AddEmployeeComponent } from './employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee.component';
import { AddCalendarComponent } from './my-calendar/add-calendar.component';
import { EditCalendarComponent } from './my-calendar/edit-calendar.component';
import { ResourceTypeComponent } from './resourcetype/resourcetype.component';
import { AddResourceTypeComponent } from './resourcetype/add-resourcetype.component';
import { EditResourceTypeComponent } from './resourcetype/edit-resourcetype.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client.component';
import { EditClientComponent } from './client/edit-client.component';
import { ResourceComponent } from './resource/resource.component';
import { AddResourceComponent } from './resource/add-resource.component';
import { EditResourceComponent } from './resource/edit-resource.component';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './project/add-project.component';
import { EditProjectComponent } from './project/edit-project.component';
import { ProjectAllocationComponent } from './projectallocation/projectallocation.component';
import { AddProjectAllocationComponent } from './projectallocation/add-projectallocation.component';
import { ReportsComponent } from './reports/reports.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';
import { EditConfirmationModalComponent } from './edit-confirmation-modal/edit-confirmation-modal.component';
import { ClientReportComponent } from './client-report/client-report.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { ConsolidatedProjectReportComponent } from './consolidated-project-report/consolidated-project-report.component';
import { Time24Pipe } from './pipes/time24';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AdjustableMaxHoursComponent } from './adjustable-max-hours/adjustable-max-hours.component';
// import { EditMaxHoursComponent } from './edit-max-hours/edit-max-hours.component';
import { EditAdjustableMaxComponent } from './adjustable-max-hours/edit-adjustable-max-hours.component';
import { AboutComponent } from './about/about.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProjectGraphReportComponent } from './project-graph-report/project-graph-report.component';

import { NgChartsModule } from 'ng2-charts'; 
import { PGraphComponent } from './p-graph/p-graph.component';
import { ConsoleReComponent } from './console-re/console-re.component';
import { QuestionsComponent } from './questions/questions.component';
import { EditQuestionsComponent } from './questions/edit-questions.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  declarations: [
    AppComponent,
    MyCalendarComponent,
    ChunkPipe,
    InactiveWarningComponent,
    LoginComponent,
    FilterPipe,
    EmployeeTypeComponent,
    AddEmployeeTypeComponent,
    EditEmployeeTypeComponent,
    NotificationComponent,
    EmployeeComponent,
    ViewemployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AddCalendarComponent,
   EditCalendarComponent,
  
    AlertComponent,
          ConfigurationComponent,
          ResourceTypeComponent,
          AddResourceTypeComponent,
          EditResourceTypeComponent,
          ClientComponent,
          AddClientComponent,
          EditClientComponent,
          ResourceComponent,
          AddResourceComponent,
          EditResourceComponent,
          ProjectComponent,
          AddProjectComponent,
          EditProjectComponent,
          ProjectAllocationComponent,
          AddProjectAllocationComponent,
          ReportsComponent,
          DeleteConfirmationModalComponent,
          EditConfirmationModalComponent,
          ClientReportComponent,
          EmployeeReportComponent,
          ProjectReportComponent,
          ConsolidatedProjectReportComponent,
          Time24Pipe,
          ChatbotComponent,
          
          AdjustableMaxHoursComponent,
                    //  EditMaxHoursComponent,
                     EditAdjustableMaxComponent,
                    AboutComponent,
                    ProjectGraphReportComponent,
                    PGraphComponent,
                    ConsoleReComponent,
                    QuestionsComponent,
                    EditQuestionsComponent,
                    EditQuestionComponent

    // RemindertoastComponent

  ],
  
  
  imports: [
    MatDialogModule,
    NgToastModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),
    MatAutocompleteModule,
    NgChartsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule
  ],
  
  
  providers: [ConfigurationComponent],
  bootstrap: [AppComponent, ProjectGraphReportComponent]
})
export class AppModule { }

