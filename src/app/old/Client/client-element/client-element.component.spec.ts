import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientElementComponent } from './client-element.component';

describe('ClientElementComponent', () => {
  let component: ClientElementComponent;
  let fixture: ComponentFixture<ClientElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
