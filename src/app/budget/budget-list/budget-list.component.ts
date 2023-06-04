import { Component, OnInit } from '@angular/core';
import { FileUploadEvent } from 'primeng/fileupload';
import { Budget } from '../domain/budget';
import { BudgetService } from '../services/budget.service';
import { Observable } from 'rxjs';
import { resetFakeAsyncZone } from '@angular/core/testing';

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
    throw new Error('Method not implemented.');
  }

}
