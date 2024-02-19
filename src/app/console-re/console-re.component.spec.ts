import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleReComponent } from './console-re.component';

describe('ConsoleReComponent', () => {
  let component: ConsoleReComponent;
  let fixture: ComponentFixture<ConsoleReComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleReComponent]
    });
    fixture = TestBed.createComponent(ConsoleReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
