import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Budget } from "../domain/budget";

@Injectable()
export class BudgetService {

    constructor(private http: HttpClient) { }

    getBudgets() {
        return this.http.get<any>('assets/data/budgets.json')
        .toPromise()
        .then(res => <Budget[]>res.data)
        .then(data => { return data; });
    }
}