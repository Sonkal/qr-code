/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QrDisplayComponent } from './qr-display.component';
import {PaymentCodeGenerator} from "../qr-form-service/payment-code-generator";

describe('QrDisplayComponent', () => {
  let component: QrDisplayComponent;
  let fixture: ComponentFixture<QrDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrDisplayComponent ],
      providers: [PaymentCodeGenerator]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should compute layout properly', () => {
    component.qrdim = 100;
    component.computeLayout(10);
    expect(component.padding).toEqual(40);
    expect(component.fullWidth).toEqual(180);
  });
});
