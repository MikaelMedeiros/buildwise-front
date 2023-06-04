import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Budget } from "../domain/budget";
import { Observable,  } from "rxjs";

@Injectable()
export class BudgetService {

    constructor(private http: HttpClient) { }

    getBudgets() : Observable<Budget[]> {
        return this.http.get<Budget[]>('assets/data/budgets.json');                        
    }

    
}