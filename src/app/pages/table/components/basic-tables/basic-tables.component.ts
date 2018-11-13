import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss']
})
export class BasicTablesComponent implements OnInit {

  default_data: Array<any>;
  userName:any;

  constructor() { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('Role').toLowerCase();
    this.default_data = [
      { caseNumber: '34532423', maidnumber: '123534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '14532423', maidnumber: '133534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '24532423', maidnumber: '953534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '64532423', maidnumber: '753534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '74532423', maidnumber: '433534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '94532423', maidnumber: '653534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '24532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' },
      { caseNumber: '34532423', maidnumber: '253534543535', issuerId: '234234',elgStart:'02/01/2016',enrlStart:'02/02/2016',trasId:'ea54ca7f-2615-4d81-a0c6-653a458e352c',createDate: '02/02/2018' }
    
    ];
  }

}
