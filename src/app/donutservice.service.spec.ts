import { TestBed } from '@angular/core/testing';

import { DonutserviceService } from './donutservice.service';

describe('DonutserviceService', () => {
  let service: DonutserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
