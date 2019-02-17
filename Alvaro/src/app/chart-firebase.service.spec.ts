import { TestBed } from '@angular/core/testing';

import { ChartFirebaseService } from './chart-firebase.service';

describe('ChartFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartFirebaseService = TestBed.get(ChartFirebaseService);
    expect(service).toBeTruthy();
  });
});
