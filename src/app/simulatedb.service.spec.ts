import { TestBed } from '@angular/core/testing';

import { SimulatedbService } from './simulatedb.service';

describe('SimulatedbService', () => {
  let service: SimulatedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulatedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
