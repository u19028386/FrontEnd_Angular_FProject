import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGraphReportComponent } from './project-graph-report.component';

describe('ProjectGraphReportComponent', () => {
  let component: ProjectGraphReportComponent;
  let fixture: ComponentFixture<ProjectGraphReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectGraphReportComponent]
    });
    fixture = TestBed.createComponent(ProjectGraphReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
