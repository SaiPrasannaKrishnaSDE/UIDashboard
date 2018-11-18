import { Component, OnInit } from '@angular/core';
import {Guid } from "guid-typescript";
import {Property} from '../property';
import { InvoiceEntity } from '../entity';

@Component({
  selector: 'app-submit-invoice-transactions',
  templateUrl: './submit-invoice-transactions.component.html',
  styleUrls: ['./submit-invoice-transactions.component.scss']
})
export class SubmitInvoiceTransactionsComponent implements OnInit {

  issuerList : Property[];
  processingStatus : Property[];

  invoiceEntity : InvoiceEntity = {
    transactionId : null,
    transactionType : null,
    caseNumber : null,
    coverageMonth : null,
    issuerId : null,
    invoiceDate : null,
    dueDate : null,
    premiumAmount : null,
    paymentStatus : null,
    processedByIEES : null,
  }

  constructor() { 
    
  }

  ngOnInit() {
    this.invoiceEntity.transactionId = Guid.create();
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

  submitInvoiceTransaction(newInvoiceEntity : InvoiceEntity) : void
  {
    console.log(newInvoiceEntity);
  }


}
