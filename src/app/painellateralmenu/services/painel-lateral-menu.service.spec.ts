import { TestBed } from '@angular/core/testing';

import { PainelLateralMenuService } from './painel-lateral-menu.service';

describe('PainellateralmenuService', () => {
  let service: PainelLateralMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainelLateralMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
