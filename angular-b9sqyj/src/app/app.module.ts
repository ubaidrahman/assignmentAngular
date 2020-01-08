import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';

import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import { MyFormServiceService } from './my-form-service.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MyFormServiceService]
})
export class AppModule { }
