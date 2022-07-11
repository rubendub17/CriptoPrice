import { TestBed } from '@angular/core/testing';

import { PriceFetchService } from './price-fetch.service';

describe('PriceFetchService', () => {
  let service: PriceFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
