import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QrFormComponent } from './qr-form/qr-form.component';

@NgModule({
  declarations: [
    QrFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [QrFormComponent]
})
export class AppModule { }
