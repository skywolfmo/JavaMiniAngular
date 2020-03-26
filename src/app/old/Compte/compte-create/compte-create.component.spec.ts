import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteCreateComponent } from './compte-create.component';

describe('CompteCreateComponent', () => {
  let component: CompteCreateComponent;
  let fixture: ComponentFixture<CompteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
