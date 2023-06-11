import { Routes, RouterModule } from '@angular/router';
import { PainellateralmenuComponent } from './painel-lateral-menu-detail/painel-lateral-menu-detail.component';

const routes: Routes = [
  { path: 'list', component: PainellateralmenuComponent },
];

export const PainellateralroutingRoutes = RouterModule.forChild(routes);
