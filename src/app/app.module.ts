import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QrFormComponent } from './qr-form/qr-form.component';
import { QrDisplayComponent } from './qr-display/qr-display.component';
import {PaymentCodeGenerator} from "./qr-form-service/payment-code-generator";
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
    QrFormComponent,
    QrDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PaymentCodeGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
