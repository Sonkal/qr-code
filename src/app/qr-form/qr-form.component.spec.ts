/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { QrFormComponent } from './qr-form.component';
import {PaymentCodeGenerator} from "../qr-form-service/payment-code-generator";
import {Gym} from "./gym";
//import { By } from '@angular/platform-browser';
//import { DebugElement } from '@angular/core';


describe('QrFormComponent', () => {
  let component: QrFormComponent;
  let fixture: ComponentFixture<QrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ QrFormComponent ],
      providers: [PaymentCodeGenerator]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should generate code', () => {
    let code = null;
    expect(component.codeGen).toBeTruthy();
    component.model.gym = Gym.GYM_CER;
    component.codeGen.subscribe((c)=>{
      code = c;
    });
    component.generate();
    expect(code).toBeTruthy();
  });
  it('should clear form', () => {
    component.clearForm();
    expect(component.model).toEqual(QrFormComponent.DEFAULT_MODEL);
  });
  it('should remove non-latin characters', () => {
    component.clearForm();
    component.latinise = true;
    let latin = component.applyLatin("Šiška bříška");
    expect(latin).toEqual("Siska briska");
  });
});
