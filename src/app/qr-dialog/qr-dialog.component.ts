import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrls: ['./qr-dialog.component.css']
})
export class QrDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<QrDialogComponent>) {}

  ngOnInit() {
  }

}
