import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  getSearchResult(){
    let RawSearchResult = [{
      "TransactionId": "151f576f-e9d0-4de9-acbf-7e530bf812ed",
      "TransactionType": "Eligibility",
      "MaidCardNumber": 1234567890,
      "CaseNumber": 111122233,
      "SSN": "SSN12345",
      "FirstName": "Leanne",
      "LastName": "Graham",
      "DateOfBirth": new Date(1/1/1980),
      "Gender": "M",
      "AddressLine1": "Lane Number 1",
      "City": "Lexington",
      "StateCode": "KY",
      "ZipCode": "40509",
      "CaseCountableIncome": 999.00,
      "ProgramCode": "MA",
      "StatusCode": "CE",
      "IMIDCode": "A1",
      "EligibilityStartDate": new Date(2019,0,1),
      "EligibilityEndDate": new Date(9999,11,31),
      "EnrollmentStartDate": new Date(2019,0,1),
      "EnrollmentEndDate": new Date(9999,11,31),
      "IssuerId": 70001,
      "EligibilityType": 'C',
      "KYHPlanType": 'A',
      "KYHPremiumPlanCode": 'Y',
      "KYHCopayIndicator": 'Y',
      "KYHPregnancyIndicator": 'Y',
      "ProcessedByMMIS": true,
      "ProcessedByMCO": false,
      "CreateDate": new Date(2018,4,1)
    },
    {
      "TransactionId": "151f576f-e9d0-4de9-acbf-7e530bf812ed",
      "TransactionType": "Invoice",
      "CaseNumber": 111122233,
      "CoverageMonth": new Date(2019,0,1),
      "IssuerId": 10001,
      "InvoiceDate": new Date(2018,10,15),
      "DueDate": new Date(2019,0,1),
      "PremiumAmount": "10.00",
      "PaymentStatus": false,
      "ProcessedByIEES": true,
      "CreateDate": new Date(2018,3,1)
    },
    {
      "TransactionId": "151f576f-e9d0-4de9-acbf-7e530bf812ed",
      "TransactionType": "Payment",
      "CaseNumber": 111122233,
      "CoverageMonth": new Date(2019,5,1),
      "IssuerId": 10001,
      "InvoiceDate": new Date(2018,10,15),
      "DueDate": new Date(2019,0,1),
      "PremiumAmount": "12.00",
      "PaymentStatus": true,
      "PaymentDate": new Date(2018,1,28),
      "ProcessedByIEES": false,
      "CreateDate": new Date(2018,7,1)
    },
    {
      "TransactionId": "7cb55032-592e-47b5-914c-5d839258f78f",
      "TransactionType": "Eligibility",
      "MaidCardNumber": 2399076548,
      "CaseNumber": 432563242,
      "SSN": "SSN12345",
      "FirstName": "Leanne",
      "LastName": "Graham",
      "DateOfBirth": new Date(1 / 1 / 1980),
      "Gender": "M",
      "AddressLine1": "Lane Number 1",
      "City": "Lexington",
      "StateCode": "KY",
      "ZipCode": "40509",
      "CaseCountableIncome": 999.00,
      "ProgramCode": "MA",
      "StatusCode": "CE",
      "IMIDCode": "A1",
      "EligibilityStartDate": new Date(2016,6,1),
      "EligibilityEndDate": new Date(9999,11,31),
      "EnrollmentStartDate": new Date(2014,6,1),
      "EnrollmentEndDate": new Date(9999,11,31),
      "IssuerId": 56009,
      "EligibilityType": 'C',
      "KYHPlanType": 'A',
      "KYHPremiumPlanCode": 'Y',
      "KYHCopayIndicator": 'Y',
      "KYHPregnancyIndicator": 'Y',
      "ProcessedByMMIS": true,
      "ProcessedByMCO": false,
      "CreateDate": new Date(2018,4,1)
    },
    {
      "TransactionId": "7cb55032-592e-47b5-914c-5d839258f78f",
      "TransactionType": "Invoice",
      "CaseNumber": 432563242,
      "CoverageMonth": new Date(2018,5,1),
      "IssuerId": 10001,
      "InvoiceDate": new Date(2018,10,15),
      "DueDate": new Date(2019,0,1),
      "PremiumAmount": "15.00",
      "PaymentStatus": false,
      "ProcessedByIEES": true,
      "CreateDate": new Date(2018,1,20)
    },
    {
      "TransactionId": "7cb55032-592e-47b5-914c-5d839258f78f",
      "TransactionType": "Payment",
      "CaseNumber": 432563242,
      "CoverageMonth": new Date(2019,0,1),
      "IssuerId": 10001,
      "InvoiceDate": new Date(2018,10,15),
      "DueDate": new Date(2019,0,1),
      "PremiumAmount": "10.00",
      "PaymentStatus": true,
      "PaymentDate": new Date(2018,1,28),
      "ProcessedByIEES": false,
      "CreateDate": new Date(2018,11,28)
    }
    ];

    return RawSearchResult;
  }
}
