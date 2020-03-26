import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceEditComponent } from './agence-edit.component';

describe('AgenceEditComponent', () => {
  let component: AgenceEditComponent;
  let fixture: ComponentFixture<AgenceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
