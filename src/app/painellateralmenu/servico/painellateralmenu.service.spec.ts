import { TestBed } from '@angular/core/testing';

import { PainellateralmenuService } from './painellateralmenu.service';

describe('PainellateralmenuService', () => {
  let service: PainellateralmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainellateralmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
