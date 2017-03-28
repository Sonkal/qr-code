/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {QrFormComponent} from "./qr-form/qr-form.component";
import {QrDisplayComponent} from "./qr-display/qr-display.component";
import {PaymentCodeGenerator} from "./qr-form-service/payment-code-generator";
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent, QrFormComponent,QrDisplayComponent
      ],
      providers: [PaymentCodeGenerator]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have div tag in the root', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.tagName).toBeTruthy();
  }));
});
