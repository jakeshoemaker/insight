using Microsoft.AspNetCore.Mvc;

namespace Insight.API.Endpoints;

public class PlaidEndpoints : IEndpoint
{
    public void DefineEndpoints(WebApplication app)
    {
        app.MapGet("api/plaid/link/create", GetLinkToken)
            .AllowAnonymous();

        app.MapPost("api/plaid/user/{id}/accessToken/exchange", GetAccessToken);
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
}
