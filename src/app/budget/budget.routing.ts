import { RouterModule, Routes } from "@angular/router";
import { BudgetListComponent } from "./budget-list/budget-list.component";

const routes: Routes = [
    { path: '', component: BudgetListComponent}
]

export const BudgetRouting = RouterModule.forChild(routes)