namespace Insight.API.Services;

public interface IAuthService
{
    public Task<Tuple<string, User>> Login(string username, string password);
}
public class AuthService : IAuthService
{
    private readonly string _key;
    private readonly InsightContext _ctx;
    private readonly ITokenService _tokenService;

    public AuthService(
        IConfiguration configuration,
        InsightContext context,
        ITokenService tokenService
        )
    {
        _key = configuration.GetSection("auth")["secret"];
        _ctx = context;
        _tokenService = tokenService;
    }

    public async Task<Tuple<string, User>> Login(string username, string password)
    {
        var user = await _ctx.Users.SingleOrDefaultAsync(x => x.Username == username && x.Password == password);
        if (user is null) return null;

        // strip password, then return
        user.Password = null;
        user.LoggedInOn = DateTime.Now;

        var token = _tokenService.CreateToken(_key, "insight.api", username);
        return Tuple.Create(token, user);
    }
}
