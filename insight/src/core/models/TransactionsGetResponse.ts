import { Account } from "./Account";
import { Transaction } from "./Transaction";

export class TransactionsGetResponse {
    accounts: Account[]
    transactions: Transaction[]
    item: object
    error: object
    request_id: string
    status_code: number
    is_success_status_code: boolean
}
