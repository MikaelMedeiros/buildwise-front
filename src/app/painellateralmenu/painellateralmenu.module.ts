import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainellateralmenuComponent } from './painellateralmenu/painellateralmenu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PainellateralmenuService } from './servico/painellateralmenu.service';
import { PainellateralroutingRoutes } from './painellateralrouting.routing';
import { HttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    PainellateralmenuComponent
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    PainellateralroutingRoutes
  ],
  providers:[
    PainellateralmenuService,
    HttpClient
  ]
})
export class PainellateralmenuModule { }
