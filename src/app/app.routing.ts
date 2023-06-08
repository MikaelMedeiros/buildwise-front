import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetModule } from './budget/budget.module';
import { PainellateralmenuModule } from './painellateralmenu/painellateralmenu.module';

const routes: Routes = [
  { path: 'list', loadChildren: () => BudgetModule},
  { path: '', loadChildren: () => PainellateralmenuModule},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
