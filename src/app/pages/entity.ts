import { Guid } from "guid-typescript";

export class PaymentEntity
{
    transactionId : Guid;
    transactionType : string;
    caseNumber : number;
    coverageMonth : Date;
    issuerId : number;
    invoiceDate : Date;
    dueDate : Date;
    premiumAmount : number;
    paymentStatus : string;
    paymentDate : Date;
    processedByIEES : string;
}

export class InvoiceEntity
{
    transactionId : Guid;
    transactionType : string;
    caseNumber : number;
    coverageMonth : Date;
    issuerId : number;
    invoiceDate : Date;
    dueDate : Date;
    premiumAmount : number;
    paymentStatus : string;
    processedByIEES : string;
}