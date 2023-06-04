import { Component, OnInit } from '@angular/core';
import { FileUploadEvent } from 'primeng/fileupload';
import { Budget } from '../domain/budget';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  maxFileSize: number =100000;
  budgets: Budget[] = [];

  ngOnInit() {

    this.budgets = [
        {id: '1'}
    ];
}

  onUpload($event: FileUploadEvent) {
    throw new Error('Method not implemented.');
  }

}
