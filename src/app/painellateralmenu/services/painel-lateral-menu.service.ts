import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MenuItem } from "primeng/api";


import { Observable,  } from "rxjs";


@Injectable()
export class PainelLateralMenuService {

  constructor(private http: HttpClient) { }

  getOpcoesMenuLateral(): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>('assets/data/menuItem.json');
  }
}
