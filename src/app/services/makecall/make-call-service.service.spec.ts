import { TestBed, inject } from '@angular/core/testing';

import { MakeCallServiceService } from './make-call-service.service';

describe('MakeCallServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeCallServiceService]
    });
  });

  it('should be created', inject([MakeCallServiceService], (service: MakeCallServiceService) => {
    expect(service).toBeTruthy();
  }));
});
