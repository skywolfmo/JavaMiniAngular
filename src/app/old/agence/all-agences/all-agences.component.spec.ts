import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAgencesComponent } from './all-agences.component';

describe('AllAgencesComponent', () => {
  let component: AllAgencesComponent;
  let fixture: ComponentFixture<AllAgencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAgencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
