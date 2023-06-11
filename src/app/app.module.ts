import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarModule } from 'primeng/toolbar';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PainelLateralComponent } from './painel-lateral/painel-lateral.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { FileUploadModule } from 'primeng/fileupload';
import { NavMenuService } from './nav-menu/services/nav-menu.service';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PainelLateralComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    ToolbarModule,
    PanelMenuModule,
    StyleClassModule,
    FileUploadModule  ],
  providers: [NavMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
