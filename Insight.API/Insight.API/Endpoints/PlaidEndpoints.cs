using Going.Plaid.Transactions;
using Microsoft.AspNetCore.Mvc;

namespace Insight.API.Endpoints;

public class PlaidEndpoints : IEndpoint
{
    public void DefineEndpoints(WebApplication app)
    {
        app.MapGet("api/plaid/link/create", GetLinkToken)
            .AllowAnonymous();

        app.MapPost("api/plaid/user/{id}/accessToken/exchange", GetAccessToken);

        app.MapGet("api/plaid/user/{id}/transactions", GetTransactions);
    }

    public async Task<IResult> GetLinkToken([FromServices] IPlaidService _plaidService)
    {
        var response = await _plaidService.CreateLinkToken();

        if (response.Error is not null)
            return Results.Problem(response.Error.ErrorMessage);

        return Results.Ok(response);
    }

    public async Task<IResult> GetAccessToken(Guid id, [FromBody] ItemPublicTokenExchangeRequest request, [FromServices] IPlaidService _plaidService)
    {
        var response = await _plaidService.ExchangePublicToken(request, id);
        if (!response.IsSuccessStatusCode)
            return Results.NotFound();

        return Results.Ok(response);
    }

    public async Task<IResult> GetTransactions(Guid id, [FromBody] TransactionsGetRequest request, [FromServices] IPlaidService _plaidService)
    {
        var response = await _plaidService.GetTransactions(id, request);
        if (!response.IsSuccessStatusCode)
            return Results.NotFound();

        return Results.Ok(response);
    }
}
