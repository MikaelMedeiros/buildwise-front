import { Component, OnInit } from '@angular/core';
import { FileUploadEvent } from 'primeng/fileupload';
import { Budget } from '../domain/budget';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  maxFileSize: number =100000;
  budgets: Budget[] = [];


  constructor(private budgetService: BudgetService) { }

  ngOnInit() {
       this.initBudgets();
  }

  initBudgets() {
    this.budgetService.getBudgets().subscribe(
      {
        next: (v) => this.populateTableBudgets(v),
        error: (e) => this.handleError(e)        
      }
    );
  }

  populateTableBudgets(res: Budget[]) {    
    this.budgets = res;
  }

  handleError(error: any) {
    throw new Error('Error: ', error);
  }

  onUpload($event: FileUploadEvent) {
    const files = $event.files;
    this.budgetService.upload(files).subscribe(
      {
        next: (v) => mensagemSucesso(v),
        error: (e) => this.handleError(e)
      }
    )
    throw new Error('Method not implemented.');
  }

}

function mensagemSucesso(v: any): void {
  throw new Error('Function not implemented.');
}

