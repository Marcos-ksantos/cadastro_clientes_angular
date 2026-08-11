import { TestBed } from '@angular/core/testing';

import { UfMunicipioServiceTs } from './uf-municipio-service.ts';

describe('UfMunicipioServiceTs', () => {
  let service: UfMunicipioServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfMunicipioServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
