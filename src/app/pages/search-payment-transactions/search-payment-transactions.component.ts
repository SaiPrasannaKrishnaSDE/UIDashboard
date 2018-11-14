import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-search-payment-transactions',
  templateUrl: './search-payment-transactions.component.html',
  styleUrls: ['./search-payment-transactions.component.scss'],
  providers: [DataService]
})
export class SearchPaymentTransactionsComponent implements OnInit {

  showSearchResults = false;
  rawSearchResults = [];
  paymentFilteredRecords = [];
  modalTransactionDetails = [];
  userName:any;

  constructor(private data: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('Role').toLowerCase();
  }

  GetInvoiceTransaction() {
    this.showSearchResults = true;
    this.rawSearchResults = this.data.getSearchResult();

    this.paymentFilteredRecords = this.rawSearchResults.filter(function (el) {
      return el.TransactionType == "Payment"
    });
  }

  openModal(content, ClickedTransactionId) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });

    this.modalTransactionDetails = this.rawSearchResults.filter(function (el) {
      return el.TransactionId == ClickedTransactionId
    });

    this.modalTransactionDetails.forEach(item => {
      item.hidden = true;
    });
  }

  ShowDetails(item) {
    this.modalTransactionDetails.forEach(item => {
      item.hidden = true;
    });
    item.hidden = false;
  }

  HideDetails(item) {
    item.hidden = true;
  }

}
