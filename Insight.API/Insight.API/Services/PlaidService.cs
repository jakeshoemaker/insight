namespace Insight.API.Services;

using System.Threading.Tasks;

public class PlaidService : IPlaidService
{
    private readonly PlaidClient _client;
    private readonly IUserService _userService;
    public PlaidService(PlaidClient client, IUserService userService)
    {
        _client = client;
        _userService = userService;
    }

    public async Task<LinkTokenCreateResponse> CreateLinkToken()
    {
        return await _client.LinkTokenCreateAsync(
            new LinkTokenCreateRequest()
            {
                User = new LinkTokenCreateRequestUser { ClientUserId = Guid.NewGuid().ToString(), },
                ClientName = "Quickstart for .NET",
                Products = new List<Products> {  Products.Auth, Products.Identity, Products.Transactions },
                Language = Language.English, // TODO: Should pick up from config
                CountryCodes = new List<CountryCode> { CountryCode.Us },
            });
    }

    public async Task<ItemPublicTokenExchangeResponse> ExchangePublicToken(
            ItemPublicTokenExchangeRequest request, Guid userId)
    {
        var exchangeResponse = await _client.ItemPublicTokenExchangeAsync(request);
        var user = await _userService.GetUserById(userId);
        if (!exchangeResponse.IsSuccessStatusCode || user is null)
            throw new Exception("Not found");

        // save the token to the user
        user.LoggedInOn = DateTime.UtcNow;
        user.AccessToken = exchangeResponse.AccessToken;
        var _ = await _userService.UpdateUser(user);

        return exchangeResponse;
    }
}
