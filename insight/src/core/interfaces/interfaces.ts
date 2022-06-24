export default interface PlaidLinkTokenResponse {
    link_token: string;
    expiration: string;
    request_id: string;
}

export default interface TransactionGetRequest {
    accessToken: string;
    showRawJson: boolean;
    startDate: Date; // Date only on server (yyyy-mm-dd)
    endDate: Date;
}

