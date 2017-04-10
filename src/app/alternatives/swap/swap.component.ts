import { Component, OnInit } from '@angular/core';
import {PaymentCodeGenerator} from "../../qr-form-service/payment-code-generator";

@Component({
  selector: 'al-swap',
  templateUrl: './swap.component.html'
})
export class SwapComponent implements OnInit {
  showCode = false;

  constructor(private codeGen: PaymentCodeGenerator) {
    console.log("subscribe");
    codeGen.subscribe((code) => {
      console.log("fired");
      this.showCode = true;
    });
  }

  ngOnInit() {
  }

  clickForm(){
    console.log("swapF");
    this.showCode = false;
  }
  clickCode(){
    console.log("swapC");
    this.showCode = true;
  }
}
