import { TransactionCode } from "../enums/TransactionCode"
import { TransactionPaymentChannel } from "../enums/TransactionPaymentChannel"
import { TransactionType } from "../enums/TransactionType"
import { PaymentMeta } from "./PaymentMeta"
import { PersonalFinanceCategory } from "./PersonalFinanceCategory"

export class Transaction {
    category: string[]
    transaction_id: string
    pending: boolean
    date: Date
    unnofficial_currency_code: string
    iso_currency_code: string
    amount: number
    account_id: string
    original_description: string
    name: string
    account_owner: string
    payment_meta: PaymentMeta
    location: Location
    check_number: string
    transaction_type: TransactionType
    merchant_name: string
    personal_finance_category: PersonalFinanceCategory
    datetime: Date
    authorized_datetime: Date
    payment_channel: TransactionPaymentChannel
    transaction_code: TransactionCode
}

