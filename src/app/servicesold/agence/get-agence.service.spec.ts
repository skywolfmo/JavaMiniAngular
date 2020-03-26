import { TestBed } from '@angular/core/testing';

import { GetAgenceService } from './get-agence.service';

describe('GetAgenceService', () => {
  let service: GetAgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
