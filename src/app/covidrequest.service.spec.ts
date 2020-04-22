import { TestBed } from '@angular/core/testing';

import { CovidrequestService } from './covidrequest.service';

describe('CovidrequestService', () => {
  let service: CovidrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
