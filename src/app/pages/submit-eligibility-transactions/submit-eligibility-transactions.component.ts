import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-eligibility-transactions',
  templateUrl: './submit-eligibility-transactions.component.html',
  styleUrls: ['./submit-eligibility-transactions.component.scss']
})

export class SubmitEligibilityTransactionsComponent implements OnInit {

    currentTab="basic";

    ngOnInit(){
        
    }
    submitBasicInfo(){
      this.currentTab="elg";
    }
    submitPrev(){
      this.currentTab="basic";
    }
    submitElgInfo(){
      this.currentTab="kyh";
    }
    submitKyhInfo(){
    }
    
}