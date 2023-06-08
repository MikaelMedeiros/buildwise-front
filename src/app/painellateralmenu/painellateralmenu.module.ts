import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainellateralmenuComponent } from './painel-lateral-menu-detail/painel-lateral-menu-detail.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PainelLateralMenuService } from './services/painel-lateral-menu.service';
import { PainellateralroutingRoutes } from './painellateralrouting.routing';
import { HttpClientModule } from '@angular/common/http';




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
    PainelLateralMenuService
  ]
})
export class PainellateralmenuModule { }
