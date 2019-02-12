import { TestBed } from '@angular/core/testing';

import { FevCountriesService } from './fev-countries.service';

describe('FevCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FevCountriesService = TestBed.get(FevCountriesService);
    expect(service).toBeTruthy();
  });
});
