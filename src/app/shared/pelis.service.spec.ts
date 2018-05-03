import { TestBed, inject } from '@angular/core/testing';

import { PelisService } from './pelis.service';

describe('PelisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PelisService]
    });
  });

  it('should be created', inject([PelisService], (service: PelisService) => {
    expect(service).toBeTruthy();
  }));
});
