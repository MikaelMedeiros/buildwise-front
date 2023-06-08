import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainellateralmenuComponent } from './painel-lateral-menu-detail.component';

describe('PainellateralmenuComponent', () => {
  let component: PainellateralmenuComponent;
  let fixture: ComponentFixture<PainellateralmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainellateralmenuComponent]
    });
    fixture = TestBed.createComponent(PainellateralmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
