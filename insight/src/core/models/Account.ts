import { AccountSubType } from "../enums/AccountSubType";
import { AccountType } from "../enums/AccountType";
import { AccountVerificationStatus } from "../enums/AccountVerificationStatus";
import { AccountBalance } from "./AccountBalance";

export class Account {
    type: AccountType
    official_name: string
    name: string
    balances: AccountBalance
    account_id: string
    subtype: AccountSubType
    verification_status: AccountVerificationStatus
}
