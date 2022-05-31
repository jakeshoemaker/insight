
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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

        // strip user of sensitive data, then return
        user.Password = null;
        user.AccessToken = null;
        user.LoggedInOn = DateTime.Now;

        var token = _tokenService.CreateToken(_key, "insight.api", username);
        return Tuple.Create(token, user);
    }
}
