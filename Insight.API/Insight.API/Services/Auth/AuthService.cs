
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Insight.API.Services;

public interface IAuthService
{
    public Task<string> Login(string username, string password);
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

    public async Task<string> Login(string username, string password)
    {
        var user = await _ctx.Users.SingleOrDefaultAsync(x => x.Username == username && x.Password == password);

        if (user is null) return null;

        return _tokenService.CreateToken(_key, "insight.api", username);
    }
}
