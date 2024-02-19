import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { LoginComponent } from './login/login.component';
import { EmployeeTypeComponent } from './employeetype/employeetype.component';
import { AddEmployeeTypeComponent } from './employeetype/add-employeetype.component';
import { EditEmployeeTypeComponent } from './employeetype/edit-employeetype.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewemployeeComponent } from './employee/viewemployee.component';
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
import { ClientReportComponent } from './client-report/client-report.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { ConsolidatedProjectReportComponent } from './consolidated-project-report/consolidated-project-report.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AdjustableMaxHoursComponent } from './adjustable-max-hours/adjustable-max-hours.component';
import { EditAdjustableMaxComponent } from './adjustable-max-hours/edit-adjustable-max-hours.component';
import { AboutComponent } from './about/about.component';
import { ProjectGraphReportComponent } from './project-graph-report/project-graph-report.component';
import { PGraphComponent } from './p-graph/p-graph.component';
import { ConsoleReComponent } from './console-re/console-re.component';
import { QuestionsComponent } from './questions/questions.component';
import { EditQuestionsComponent } from './questions/edit-questions.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';

const routes: Routes = [
  { path : 'mycalendar', component: MyCalendarComponent },
   {path : 'login', component:LoginComponent},
   { path : 'types', component:EmployeeTypeComponent},
   {path : 'addtype', component:AddEmployeeTypeComponent},
   {path : 'type/:id', component:EditEmployeeTypeComponent}, 
   { path : 'employees', component:EmployeeComponent},
   {path : 'employee/:employeeId', component:ViewemployeeComponent },
   {path : 'config', component:ConfigurationComponent},
   {path : 'addemployee', component : AddEmployeeComponent},
   {path : 'eemployee/:id', component:EditEmployeeComponent},
   {path : 'addcalendaritem', component : AddCalendarComponent},
   {path : 'calendaritem/:calendarItemId', component : EditCalendarComponent},
   {path : 'resourcetype', component: ResourceTypeComponent},
   {path : 'addresourcetype', component:AddResourceTypeComponent},
   {path : 'resourcetype/:id', component:EditResourceTypeComponent}, 
   {path : 'client' , component: ClientComponent},
   {path : 'addclient', component:AddClientComponent},
   {path : 'client/:id', component:EditClientComponent}, 
   {path : 'resource', component:ResourceComponent}, 
   {path : 'addresource', component:AddResourceComponent},
   {path : 'resource/:id', component:EditResourceComponent}, 
   {path : 'project', component:ProjectComponent}, 
   {path : 'addproject', component:AddProjectComponent},
   {path : 'project/:id', component:EditProjectComponent}, 
 
   { path: 'projectAllocation', component: ProjectAllocationComponent },
   {path : 'projectAllocation/:id', component:ProjectAllocationComponent},
   {path : 'addprojectAllocation', component:AddProjectAllocationComponent},
   {path : 'report', component: ReportsComponent},
   {path : 'client-report' , component : ClientReportComponent},
   {path : 'employee-report', component : EmployeeReportComponent},
   {path : 'project-report', component : ProjectReportComponent},
   {path : 'consolidated-report', component : ConsolidatedProjectReportComponent},
   {path : 'chatbot', component : ChatbotComponent},
   {path : 'max', component : AdjustableMaxHoursComponent},
   {path : 'max/:id', component:EditAdjustableMaxComponent},
   {path : 'about' , component :AboutComponent},
   {path : 'pGraph', component : PGraphComponent},
   {path : 'Graph', component : ConsoleReComponent},
   {path : 'question', component : QuestionsComponent},
   {path : 'question/:id', component:EditQuestionsComponent},
  //  {path : 'question/:id', component:EditQuestionComponent}


  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
