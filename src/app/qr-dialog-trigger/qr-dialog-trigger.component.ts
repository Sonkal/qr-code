import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {QrDialogComponent} from "../qr-dialog/qr-dialog.component";

@Component({
  selector: 'qr-dialog-trigger',
  templateUrl: './qr-dialog-trigger.component.html',
  styleUrls: ['./qr-dialog-trigger.component.css']
})
export class QrDialogTriggerComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openDialog(){
    let dialogRef = this.dialog.open(QrDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      // when finished
    });
  }

  ngOnInit() {
  }

}
