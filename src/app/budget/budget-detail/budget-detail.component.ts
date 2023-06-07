import { Component, OnInit } from '@angular/core';
import { FileUploadEvent } from 'primeng/fileupload';
import { Budget } from '../domain/budget';
import { BudgetService } from '../services/budget.service';
import { Observable } from 'rxjs';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent {

  maxFileSize: number =100000;
  budgets: Budget[] = [];

}
