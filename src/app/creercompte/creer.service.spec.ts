import { TestBed } from '@angular/core/testing';

import { CreerService } from './creer.service';

describe('CreerService', () => {
  let service: CreerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
