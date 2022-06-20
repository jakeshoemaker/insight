namespace Insight.API.Services;

using System.Threading.Tasks;
using Going.Plaid.Transactions;

public class PlaidService : IPlaidService
{
    private readonly PlaidClient _client;
    private readonly IUserService _userService;
    private readonly ILogger<PlaidService> _logger;

    public PlaidService(PlaidClient client, IUserService userService, ILogger<PlaidService> logger)
    {
        _client = client;
        _userService = userService;
        _logger = logger;
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
            ItemPublicTokenExchangeRequest request, Guid id)
    {
        var exchangeResponse = await _client.ItemPublicTokenExchangeAsync(request);
        var user = await _userService.GetUserById(id);
        if (!exchangeResponse.IsSuccessStatusCode || user is null)
            throw new Exception("Not found");

        // save the token to the user
        user.LoggedInOn = DateTime.UtcNow;
        user.AccessToken = exchangeResponse.AccessToken;
        var _ = await _userService.UpdateUser(user);

        return exchangeResponse;
    }

    public async Task<TransactionsGetResponse> GetTransactions(Guid id, 
            TransactionsGetRequest transactionRequest)
    {
        // get access token
        var user = await _userService.GetUserById(id);
        transactionRequest.AccessToken = user.AccessToken;

        _logger.LogInformation($"Get Transactions Request initiated: {transactionRequest}");
        var res = await _client.TransactionsGetAsync(transactionRequest);
        

        if (!res.IsSuccessStatusCode || res is null)
        {
            _logger.LogError($"Error retrieving transacations: {res.Error}");
            throw new BadHttpRequestException("Bad request - check logs");
        }

        // do stuff with transactions later - for now just send res
        _logger.LogInformation($"Transactions: {res.Transactions}");
        return res;
    }

}
