import { Component, OnInit } from '@angular/core';
import {Guid } from "guid-typescript";
import {Property} from '../property';
import { BasicInfoEntity ,ElgInfoEntity,KYHInfoEntity} from '../entity';


@Component({
  selector: 'app-submit-eligibility-transactions',
  templateUrl: './submit-eligibility-transactions.component.html',
  styleUrls: ['./submit-eligibility-transactions.component.scss']
})

export class SubmitEligibilityTransactionsComponent implements OnInit {

    currentTab="basic";

    issuerList : Property[];
    processingStatus : Property[];
    kyhPlanType:any;
    genderStatus:any;
    
    submitPrev(){
      this.currentTab="basic";
    }
    submitPrevElg(){
      this.currentTab="elg";
    }
   

  
    basicInfoEntity : BasicInfoEntity = {
      transactionId:null,
      transactionType: null,
      maidCardNumber : null,
      caseNumber : null,
      ssn : null,
      firstName : null,
      lastName : null,
      dateOfBirth : null,
      gender : null,
      addressLine1 : null,
      city : null,
      stateCode : null,
      zipCode : null
    }

    elgInfoEntity:ElgInfoEntity = {
      caseCountableIncome:null,
      programCode:null,
      eligibilityEndDate:null,
      eligibilityStartDate:null,
      enrollmentEndDate:null,
      enrollmentStartDate:null,
      statusCode:null,
      iMIDCode:null,
      issuerId:null,
      elgType:null
    }
  
    kyhInfoEntity:KYHInfoEntity ={
      kyhPlanType:null,
      kyhPremiumPlanCode:null,
      kyhCopayIndicator:null,
      kyhPregnancyIndicator:null,
      kyhIndStartDate:null,
      kyhIndEndDate:null,
      kyhPremiumAmt:null,
      kyhPremiumStartDate:null,
      kyhPremiumEndDate:null,
      processedByMMIS:null,
      processedByMCO:null
    }
    constructor() { 
      
    }
  
    ngOnInit() {
      this.basicInfoEntity.transactionId = Guid.create();
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

      this.genderStatus =[
          {id:'M',value:'M'},
          {id:'F',value:'F'},
          {id:'U',value:'U'}
      ]

      this.kyhPlanType=[
        {
          id:'S',value:'S'
        },
        {
          id:'A',value:'A'
        }
      ]
    }
  
    submitBasicInfo(basicInfoEntity : BasicInfoEntity) : void
    {
      this.currentTab="elg";
      console.log(basicInfoEntity);
    }

    submitElgInfo(elgInfoEntity : ElgInfoEntity) : void
    {
      this.currentTab="kyh";
      console.log(elgInfoEntity);
    }
    submitKyhInfo(kyhInfoEntity : KYHInfoEntity) : void
    {
      console.log(kyhInfoEntity);
      alert("Submit Success!!")
    }
    
}