import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustableMaxHoursComponent } from './adjustable-max-hours.component';

describe('AdjustableMaxHoursComponent', () => {
  let component: AdjustableMaxHoursComponent;
  let fixture: ComponentFixture<AdjustableMaxHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdjustableMaxHoursComponent]
    });
    fixture = TestBed.createComponent(AdjustableMaxHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
