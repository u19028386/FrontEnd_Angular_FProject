import { Component, OnInit } from '@angular/core';
import { ProjectAllocationView } from '../shared/projectAllocationView';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-p-graph',
  templateUrl: './p-graph.component.html',
  styleUrls: ['./p-graph.component.scss']
})
export class PGraphComponent {
  projectAllocations: ProjectAllocationView[] = [];

  projectNames: string[] = [];
  totalNumHours: number[] = [];
  billableOverTime: number[] = [];

  constructor(private dataService: DataService) {} 
   
    ngOnInit(): void {
      this.getProjectAllocations();
    
    }
    getProjectAllocations() {
      this.dataService.getProjectAllocations().subscribe((result: ProjectAllocationView[]) => {
        this.projectAllocations = result;
  
        this.projectAllocations.forEach((allocation) => {
          this.projectNames.push(allocation.pName);
          this.totalNumHours.push(allocation.totalNumHours);
          this.billableOverTime.push(allocation.billableOverTime);
          console.log('here')
        });
      });
    }

}
