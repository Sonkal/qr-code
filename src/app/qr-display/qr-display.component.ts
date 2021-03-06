import {Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';
import {PaymentCodeGenerator} from "../qr-form-service/payment-code-generator";

declare let QRCode: any;

@Component({
  selector: 'qr-display',
  templateUrl: './qr-display.component.html',
  styleUrls: ['./qr-display.component.css']
})
export class QrDisplayComponent implements OnInit {

  // QR Core wrapper element
  @ViewChild('qrDisplay') qrEl: ElementRef;
  @ViewChild('qrBottom') qrBottom: ElementRef;

  qrCode = null;

  dim:number;
  @Input() set qrdim(value){this.dim = Number(value);}
  get qrdim():number{return this.dim;}
  padding: number;
  fullWidth: number;


  constructor(private codeGen: PaymentCodeGenerator) {
    codeGen.subscribe((code) => {
      this.generate(code)
    });
  }


  ngOnInit() {
  }

  generate(code: string) {
    if (!this.qrCode) {
      this.qrCode = new QRCode(this.qrEl.nativeElement, {
        width: this.qrdim,
        height: this.qrdim
      });
    }
    this.qrCode.clear();

    this.qrCode.makeCode(code);
    let dotWid: number = this.qrCode.nWidth;

    this.computeLayout(dotWid);

//    this.qrEl.nativeElement.parentElement.parentElement.style.visibility = "visible";
    this.qrBottom.nativeElement.style.visibility = "visible"
  }

  computeLayout(dotWid: number) {
    this.padding = 4 * Number(dotWid);
    this.fullWidth = (this.qrdim + 2 * this.padding);
  }
}
