import { TestBed, inject } from '@angular/core/testing';

import { AlertmatrixService } from './alertmatrix.service';

describe('AlertmatrixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertmatrixService]
    });
  });

  it('should be created', inject([AlertmatrixService], (service: AlertmatrixService) => {
    expect(service).toBeTruthy();
  }));
});
