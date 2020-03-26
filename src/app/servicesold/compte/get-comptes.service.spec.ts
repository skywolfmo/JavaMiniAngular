import { TestBed } from '@angular/core/testing';

import { GetComptesService } from './get-comptes.service';

describe('GetComptesService', () => {
  let service: GetComptesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetComptesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
