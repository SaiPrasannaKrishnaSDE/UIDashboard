import { Component, OnInit } from '@angular/core';
import {Guid } from "guid-typescript";
import {Property} from '../property'

@Component({
  selector: 'app-submit-invoice-transactions',
  templateUrl: './submit-invoice-transactions.component.html',
  styleUrls: ['./submit-invoice-transactions.component.scss']
})
export class SubmitInvoiceTransactionsComponent implements OnInit {
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
