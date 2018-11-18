import { Guid } from 'guid-typescript';
import TransactionType from './transaction-type.enum';

export interface Transaction  {
readonly transactionId: Guid;
readonly transactionType: TransactionType;
readonly casenumber: String;
}

