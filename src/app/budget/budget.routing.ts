import { RouterModule, Routes } from "@angular/router";
import { BudgetListComponent } from "./budget-list/budget-list.component";
import { BudgetDetailComponent } from "./budget-detail/budget-detail.component";

const routes: Routes = [
    { path: '', component: BudgetListComponent, data: { testes: "teste"} },
    { path: 'detalhe/:id', component: BudgetDetailComponent}
]

export const BudgetRouting = RouterModule.forChild(routes)