namespace Insight.API.Services.Interfaces;

using Going.Plaid.Item;
using Going.Plaid.Link;

public interface IPlaidService
{
    public Task<LinkTokenCreateResponse> CreateLinkToken();
    Task<ItemPublicTokenExchangeResponse> ExchangePublicToken(ItemPublicTokenExchangeRequest request, Guid userId);
}
