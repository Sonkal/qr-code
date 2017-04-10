/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QrDialogTriggerComponent } from './qr-dialog-trigger.component';

describe('QrDialogTriggerComponent', () => {
  let component: QrDialogTriggerComponent;
  let fixture: ComponentFixture<QrDialogTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrDialogTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDialogTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
