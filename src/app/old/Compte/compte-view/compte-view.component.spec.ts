import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteViewComponent } from './compte-view.component';

describe('CompteViewComponent', () => {
  let component: CompteViewComponent;
  let fixture: ComponentFixture<CompteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
