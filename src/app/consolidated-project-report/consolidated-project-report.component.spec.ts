import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedProjectReportComponent } from './consolidated-project-report.component';

describe('ConsolidatedProjectReportComponent', () => {
  let component: ConsolidatedProjectReportComponent;
  let fixture: ComponentFixture<ConsolidatedProjectReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsolidatedProjectReportComponent]
    });
    fixture = TestBed.createComponent(ConsolidatedProjectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
