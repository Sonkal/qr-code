import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QrFormComponent } from './qr-form/qr-form.component';
import { QrDisplayComponent } from './qr-display/qr-display.component';
import {PaymentCodeGenerator} from "./qr-form-service/payment-code-generator";
import {AppComponent} from "./app.component";
import { QrDialogComponent } from './qr-dialog/qr-dialog.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { QrDialogTriggerComponent } from './qr-dialog-trigger/qr-dialog-trigger.component';
import { RouterModule, Routes } from '@angular/router';
import { SideBySideComponent } from './alternatives/side-by-side/side-by-side.component';
import { InDialogComponent } from './alternatives/in-dialog/in-dialog.component';
import { SwapComponent } from './alternatives/swap/swap.component';
import { AlternativesComponent } from './alternatives/alternatives/alternatives.component';

const appRoutes: Routes = [
  { path: 'side-by-side', component: SideBySideComponent },
  { path: 'dialog', component: InDialogComponent },
  { path: 'swap', component: SwapComponent },
  { path: '', component: AlternativesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QrFormComponent,
    QrDisplayComponent,
    QrDialogComponent,
    QrDialogTriggerComponent,
    SideBySideComponent,
    InDialogComponent,
    SwapComponent,
    AlternativesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [QrDialogComponent],
  providers: [PaymentCodeGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
