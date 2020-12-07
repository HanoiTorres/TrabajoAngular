import { TestBed } from '@angular/core/testing';

import { MybdusersService } from './mybdusers.service';

describe('MybdusersService', () => {
  let service: MybdusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybdusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
