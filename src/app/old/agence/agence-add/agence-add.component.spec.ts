import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceAddComponent } from './agence-add.component';

describe('AgenceAddComponent', () => {
  let component: AgenceAddComponent;
  let fixture: ComponentFixture<AgenceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
