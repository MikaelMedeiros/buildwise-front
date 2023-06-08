import { MenuItem } from 'primeng/api';
import { PainelLateralMenuService } from '../services/painel-lateral-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painellateralmenu',
  templateUrl: './painel-lateral-menu-detail.component.html',
  styleUrls: ['./painel-lateral-menu-detail.component.css']
})
export class PainellateralmenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private painellateralmenuService: PainelLateralMenuService){}

  ngOnInit() {
    this.initMenuItems();
  }

  initMenuItems() {
    this.painellateralmenuService.getOpcoesMenuLateral().subscribe(
      {
          next:(v)=> this.items = v,
          error:(e) => console.log('AROOOOOOOU')
      }

    );

  }


  }



