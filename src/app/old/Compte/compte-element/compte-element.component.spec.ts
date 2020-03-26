import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteElementComponent } from './compte-element.component';

describe('CompteElementComponent', () => {
  let component: CompteElementComponent;
  let fixture: ComponentFixture<CompteElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
