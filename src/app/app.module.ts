import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PainellateralmenuService } from './painellateralmenu/servico/painellateralmenu.service';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [PainellateralmenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
