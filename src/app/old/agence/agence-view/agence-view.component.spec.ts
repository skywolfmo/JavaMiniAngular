import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceViewComponent } from './agence-view.component';

describe('AgenceViewComponent', () => {
  let component: AgenceViewComponent;
  let fixture: ComponentFixture<AgenceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
