import { Routes, RouterModule } from '@angular/router';
import { PainellateralmenuComponent } from './painellateralmenu/painellateralmenu.component';

const routes: Routes = [
  { path: '', component: PainellateralmenuComponent },
];

export const PainellateralroutingRoutes = RouterModule.forChild(routes);
