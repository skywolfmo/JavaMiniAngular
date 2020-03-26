import { TestBed } from '@angular/core/testing';

import { GetCompteService } from './get-compte.service';

describe('GetCompteService', () => {
  let service: GetCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
