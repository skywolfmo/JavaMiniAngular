import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceElementComponent } from './agence-element.component';

describe('AgenceElementComponent', () => {
  let component: AgenceElementComponent;
  let fixture: ComponentFixture<AgenceElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
