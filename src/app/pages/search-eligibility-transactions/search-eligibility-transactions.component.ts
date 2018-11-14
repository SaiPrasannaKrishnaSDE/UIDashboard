import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-search-eligibility-transactions',
  templateUrl: './search-eligibility-transactions.component.html',
  styleUrls: ['./search-eligibility-transactions.component.scss'],
  providers: [DataService]
})
export class SearchEligibilityTransactionsComponent implements OnInit {

  showSearchResults = false;
  rawSearchResults = [];
  eligibilityFilteredRecords = [];
  modalTransactionDetails = [];
  userName:any;

  constructor(private data : DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('Role').toLowerCase();
  }

  GetEligibilityTransaction()
  {
    this.showSearchResults = true;
    this.rawSearchResults = this.data.getSearchResult();

    this.eligibilityFilteredRecords = this.rawSearchResults.filter(function (el) {
      return el.TransactionType == "Eligibility"
    });
  }

  openModal(content, ClickedTransactionId) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
