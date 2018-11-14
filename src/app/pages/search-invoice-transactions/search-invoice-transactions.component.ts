import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-search-invoice-transactions',
  templateUrl: './search-invoice-transactions.component.html',
  styleUrls: ['./search-invoice-transactions.component.scss'],
  providers: [DataService]
})
export class SearchInvoiceTransactionsComponent implements OnInit {

  showSearchResults = false;
  rawSearchResults = [];
  invoiceFilteredRecords = [];
  modalTransactionDetails = [];
  userName : any;

  constructor(private data: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('Role').toLowerCase();
  }

  GetInvoiceTransaction() {
    this.showSearchResults = true;
    this.rawSearchResults = this.data.getSearchResult();

    this.invoiceFilteredRecords = this.rawSearchResults.filter(function (el) {
      return el.TransactionType == "Invoice"
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
