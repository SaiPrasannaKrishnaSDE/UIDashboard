import { Component, OnInit } from '@angular/core';
import { AbstractFormGroupDirective } from '@angular/forms';
import {Guid } from "guid-typescript";
import {Property} from '../property'
import { PaymentEntity } from '../entity';

@Component({
  selector: 'app-submit-payment-transactions',
  templateUrl: './submit-payment-transactions.component.html',
  styleUrls: ['./submit-payment-transactions.component.scss']
})


export class SubmitPaymentTransactionsComponent implements OnInit {

  issuerList : Property[];
  processingStatus : Property[];

  paymentEntity : PaymentEntity = {
    transactionId : null,
    transactionType : null,
    caseNumber : null,
    coverageMonth : null,
    issuerId : null,
    invoiceDate : null,
    dueDate : null,
    premiumAmount : null,
    paymentStatus : null,
    paymentDate : null,
    processedByIEES : null,
  }

  constructor() { 
    
  }

  ngOnInit() {
    this.paymentEntity.transactionId = Guid.create();

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
submitPaymentTransaction(newPaymentEntity : PaymentEntity) : void
  {
    console.log(newPaymentEntity);
  }
}
