
import { NavMenuService } from './services/nav-menu.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{



  constructor(private router: Router, private service: NavMenuService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navegarParaOutraRota() {
    this.router.navigate(['/list']);
  }

  onUpload($event: FileUploadEvent) {
    const files = $event.files;
    this.service.upload(files).subscribe(
      {
        next: (v) => mensagemSucesso(v),
        error: (e) => this.handleError(e)
      }
    )
    throw new Error('Method not implemented.');
  }

  handleError(error: any) {
    throw new Error('Error: ', error);
  }

  esconderDiv() {
   this.service.esconderDiv() ;
  }


}


function mensagemSucesso(v: any) {
  throw new Error('Function not implemented.');
}

