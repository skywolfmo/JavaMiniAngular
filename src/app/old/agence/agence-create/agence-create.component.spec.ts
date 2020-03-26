import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceCreateComponent } from './agence-create.component';

describe('AgenceCreateComponent', () => {
  let component: AgenceCreateComponent;
  let fixture: ComponentFixture<AgenceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
