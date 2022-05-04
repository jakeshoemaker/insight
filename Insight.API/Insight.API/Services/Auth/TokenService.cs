namespace Insight.API.Services.Auth;
public interface ITokenService
{
    string CreateToken(string key, string issuer, string username);
}
public class TokenService : ITokenService
{
    private TimeSpan _expires = new TimeSpan(0, 30, 0);

    public string CreateToken(string key, string issuer, string username)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.Name, username),
            new Claim(ClaimTypes.NameIdentifier, Guid.NewGuid().ToString())
        };

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
        var tokenDescriptor = new JwtSecurityToken(issuer, issuer, claims,
            expires: DateTime.Now.Add(_expires), signingCredentials: credentials);
        return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
    }
}
