export interface PaymentMeta {
    payment_method: string
    by_order_of: string
    payee: string
    ppd_id: string // ach ppid for the payer
    reference_number: string
    payment_processor: string
    reason: string
}
