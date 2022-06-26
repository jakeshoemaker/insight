export class AccountBalance {
    iso_currency_code: string
    limit: number // limit (credit limit / debit -> overdraft limit
    current: number // amount in funds or owed by the acct
    available: number // amount that can be withdrawn
    unofficial_currency_code: string
    last_updated_datetime: Date
}
