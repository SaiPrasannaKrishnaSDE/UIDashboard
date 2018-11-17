import { Component, OnInit } from '@angular/core';
import { AbstractFormGroupDirective } from '@angular/forms';
import {Guid } from "guid-typescript";
import {Property} from '../property'

@Component({
  selector: 'app-submit-payment-transactions',
  templateUrl: './submit-payment-transactions.component.html',
  styleUrls: ['./submit-payment-transactions.component.scss']
})


export class SubmitPaymentTransactionsComponent implements OnInit {

  public id : Guid;

  issuerList : Property[];
  processingStatus : Property[];

  constructor() { 
    
  }

  ngOnInit() {
    this.id = Guid.create();
    this.issuerList = [
      {id : 70001, value : 70001 },
      {id : 70002, value : 70002 },
      {id : 70003, value : 70003 },
      {id : 70004, value : 70004 },
      {id : 70005, value : 70005 }
    ];

    this.processingStatus = [
      {id : 'Y', value : 'Yes' },
      {id : 'N', value : 'No' },
    ]
  }

}
