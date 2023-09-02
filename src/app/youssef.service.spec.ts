import { TestBed } from '@angular/core/testing';

import { YoussefService } from './youssef.service';

describe('YoussefService', () => {
  let service: YoussefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoussefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
