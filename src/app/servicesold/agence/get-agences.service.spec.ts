import { TestBed } from '@angular/core/testing';

import { GetAgencesService } from './get-agences.service';

describe('GetAgencesService', () => {
  let service: GetAgencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAgencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
