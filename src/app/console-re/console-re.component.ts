import { Component, OnInit } from '@angular/core';
import { ProjectAllocationView } from '../shared/projectAllocationView';
import { EventReport } from '../shared/eventReport';
import { DataService } from '../services/data.service';

// Import your interfaces here

@Component({
  selector: 'app-console-re',
  templateUrl: './console-re.component.html',
  styleUrls: ['./console-re.component.scss']
})
export class ConsoleReComponent implements OnInit{
  projectAllocations: ProjectAllocationView[] = [];
  eventReports: EventReport[] = [];
  selectedProjectId!: number;
  groupedData: Map<string, ProjectAllocationView[]> = new Map<string, ProjectAllocationView[]>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllocations();
  }

  getAllocations() {
    console.log('hey');
    this.dataService.getProjectAllocations().subscribe(
      (projectAllocations: ProjectAllocationView[]) => {
        this.projectAllocations = projectAllocations;
        console.log('hey2');
        this.groupDataByPName();
      }
    );
  }

  private groupDataByPName() {
    console.log('hey3');
    this.groupedData.clear();
    for (const allocation of this.projectAllocations) {
      const pName = allocation.pName;
      if (!this.groupedData.has(pName)) {
        this.groupedData.set(pName, []);
      }
      this.groupedData.get(pName)!.push(allocation);
    }
  }}