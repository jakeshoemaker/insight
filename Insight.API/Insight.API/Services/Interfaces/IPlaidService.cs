namespace Insight.API.Services.Interfaces;

using Going.Plaid.Item;
using Going.Plaid.Link;
using Going.Plaid.Transactions;

public interface IPlaidService
{
    Task<LinkTokenCreateResponse> CreateLinkToken();
    Task<ItemPublicTokenExchangeResponse> ExchangePublicToken(ItemPublicTokenExchangeRequest request, Guid id);
    Task<TransactionsGetResponse> GetTransactions(Guid id, TransactionsGetRequest request); 
}
