import { TestBed } from '@angular/core/testing';

import { DonutServiceService } from './donutservice.service';

describe('DonutserviceService', () => {
  let service: DonutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
