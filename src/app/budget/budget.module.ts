import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table'
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetRouting } from './budget.routing';
import { BudgetService } from './services/budget.service';




@NgModule({
  declarations: [
    BudgetListComponent
  ],
  imports: [
    BudgetRouting,
    CommonModule,
    FileUploadModule,
    TableModule
  ], 
  providers: [
    BudgetService
  ]
})
export class BudgetListModule { }
