import { MenuItem } from 'primeng/api';
import { PainellateralmenuService } from './../servico/painellateralmenu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painellateralmenu',
  templateUrl: './painellateralmenu.component.html',
  styleUrls: ['./painellateralmenu.component.css']
})
export class PainellateralmenuComponent implements OnInit {

  items: MenuItem[] = [];

   constructor(private painellateralmenuService: PainellateralmenuService){}

  ngOnInit(): void {
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



