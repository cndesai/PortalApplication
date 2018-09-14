import { TestBed, inject } from '@angular/core/testing';

import { ServerdetailsService } from './serverdetails.service';

describe('ServerdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerdetailsService]
    });
  });

  it('should be created', inject([ServerdetailsService], (service: ServerdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
