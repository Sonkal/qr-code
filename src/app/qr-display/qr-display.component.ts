import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {PaymentCodeGenerator} from "../qr-form-service/payment-code-generator";

declare let QRCode: any;

@Component({
  selector: 'qr-display',
  templateUrl: './qr-display.component.html',
  styleUrls: ['./qr-display.component.css']
})
export class QrDisplayComponent implements OnInit {

  @ViewChild('qrDisplay') qrEl: ElementRef;
  // QR Core wrapper element
  qrCode = null;

  constructor(private codeGen:PaymentCodeGenerator) {
    codeGen.subscribe((code)=>{this.generate(code)});
  }


  ngOnInit() {
  }

  generate(code:string) {
    if (!this.qrCode) {
      let formWrapEl = document.getElementById("form-wrap");
      let dim = formWrapEl.getBoundingClientRect().height - 60;
      this.qrCode = new QRCode(this.qrEl.nativeElement, {
        width: dim,
        height: dim
      });
      this.qrEl.nativeElement.style.width = String(dim);
    }
    this.qrCode.clear();


    this.qrCode.makeCode(code);
    this.qrEl.nativeElement.parentElement.parentElement.style.visibility = "visible";
  }
}
