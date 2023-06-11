import { NavMenuService } from './nav-menu/services/nav-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private servico: NavMenuService){}
  exibirDiv: boolean = true;
  ngOnInit(): void {

    console.log('entra aqui')
  }

async setaExibirt(){
  this.exibirDiv = this.servico.exibirDiv;
}

}
