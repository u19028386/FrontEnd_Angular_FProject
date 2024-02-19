// import { Component, OnInit } from '@angular/core';
// import { ProjectAllocationView } from '../shared/projectAllocationView';
// import { NgChartsModule } from 'ng2-charts';

// @Component({
//   selector: 'app-project-graph-report',
//   templateUrl: './project-graph-report.component.html',
//   styleUrls: ['./project-graph-report.component.scss']
// })
// export class ProjectGraphReportComponent implements OnInit{
//   projectAllocations: ProjectAllocationView[] = []; // Replace with your actual data

//   // Chart data
//   chartData: any[] = [];
//   chartLabels: string[] = [];
//   chartOptions: any = {
//     responsive: true,
//   };
//   chartType: string = 'bar';
 

//   ngOnInit() {
//     // Group data by pName and calculate totalNumHours and billableOverTime
//     const groupedData = this.groupDataByPName(this.projectAllocations);

//     // Extract labels and data
//     this.chartLabels = groupedData.map((item) => item.pName);
//     this.chartData.push({
//       data: groupedData.map((item) => item.totalNumHours),
//       label: 'Total Num Hours',
//     });
//     this.chartData.push({
//       data: groupedData.map((item) => item.billableOverTime),
//       label: 'Billable OverTime',
//     });
//   }

// // Function to group data by pName
// groupDataByPName(data: ProjectAllocationView[]): { pName: string, totalNumHours: number, billableOverTime: number }[] {
//   const groupedData: { pName: string, totalNumHours: number, billableOverTime: number }[] = [];
//   const pNameSet = new Set();

//   data.forEach((item) => {
//     if (!pNameSet.has(item.pName)) {
//       pNameSet.add(item.pName);
//       const filteredData = data.filter((x) => x.pName === item.pName);
//       const totalNumHours = filteredData.reduce(
//         (sum, current) => sum + current.totalNumHours,
//         0
//       );
//       const billableOverTime = filteredData.reduce(
//         (sum, current) => sum + current.billableOverTime,
//         0
//       );

//       groupedData.push({
//         pName: item.pName,
//         totalNumHours,
//         billableOverTime,
//       });
//     }
//   });

//   return groupedData;
// }

// }

import { Component, OnInit } from '@angular/core';
import { ProjectAllocationView } from '../shared/projectAllocationView';
import { NgChartsModule } from 'ng2-charts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-project-graph-report',
  templateUrl: './project-graph-report.component.html',
  styleUrls: ['./project-graph-report.component.scss']
})
export class ProjectGraphReportComponent implements OnInit {
  projectAllocations: ProjectAllocationView[] = [];// Replace with your actual data

  // Chart data
  chartData: any[] = [];
  chartLabels: string[] = [];
  chartOptions: any = {
    responsive: true,
  };

  constructor(private dataService: DataService) {} 
   
    ngOnInit(): void {
      this.getProjectAllocations();
      console.log('h');
    
    }

  getProjectAllocations() {
    this.dataService.getProjectAllocations().subscribe((result: ProjectAllocationView[]) => {
      this.projectAllocations = result;
      // this.filterProjectAllocations();
    });
  }

  // Function to group data by pName
  // groupDataByPName(data: ProjectAllocationView[]): { pName: string, totalNumHours: number, billableOverTime: number }[] {
  //   const groupedData: { pName: string, totalNumHours: number, billableOverTime: number }[] = [];
  //   const pNameSet = new Set();

  //   data.forEach((item) => {
  //     if (!pNameSet.has(item.pName)) {
  //       pNameSet.add(item.pName);
  //       const filteredData = data.filter((x) => x.pName === item.pName);
  //       const totalNumHours = filteredData.reduce(
  //         (sum, current) => sum + current.totalNumHours,
  //         0
  //       );
  //       const billableOverTime = filteredData.reduce(
  //         (sum, current) => sum + current.billableOverTime,
  //         0
  //       );

  //       groupedData.push({
  //         pName: item.pName,
  //         totalNumHours,
  //         billableOverTime,
  //       });
  //     }
  //   });

  //   return groupedData;
  // }
}

