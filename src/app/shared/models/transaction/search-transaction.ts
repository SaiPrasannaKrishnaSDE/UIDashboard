import { IssuerType } from "./issuer-type.enum";

export interface SearchTransaction  {
    readonly caseNumber: String;
    readonly issuerId: IssuerType;
    readonly createDate : Date;
    }