
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ProjectAllocationView } from '../shared/projectAllocationView';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent{

employeeId!: number;
  projectAllocations: ProjectAllocationView[] = [];
  errorMessage: string = '';

  constructor(private projectAllocationService: ChatService) { }


  retrieveProjectAllocations(): void {
    this.errorMessage = ''; 
    this.projectAllocationService.getProjectAllocationsForEmployee(this.employeeId)
      .subscribe(
        projectAllocations => {
          if (projectAllocations.length === 0) {
            this.errorMessage = 'No project allocations found for this employee or employee id does not exist.';
          } else {
            this.projectAllocations = projectAllocations;
          }
        },
        error => {
          this.errorMessage = 'No project allocations found for this employee or employee id does not exist.';
          console.error(error);
        }
      );
  }
}

