import { TestBed } from '@angular/core/testing';

import { PeoplequeryService } from './peoplequery.service';

describe('PeoplequeryService', () => {
  let service: PeoplequeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeoplequeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
