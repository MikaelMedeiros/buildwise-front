import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {
  baseUrl: string = '//localhost:8080'
  exibirDiv: boolean = true;
  constructor(private http: HttpClient) { }


  esconderDiv() {
    console.log('aoooooooow')
    this.exibirDiv != this.exibirDiv;
  }


  upload(file: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, {file});
}
}
