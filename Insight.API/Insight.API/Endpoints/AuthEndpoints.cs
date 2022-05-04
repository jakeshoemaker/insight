namespace Insight.API.Endpoints;
public class AuthEndpoints : IEndpoint
{
    public void DefineEndpoints(WebApplication app)
    {
        app.MapPost("api/auth/login", Login)
            .AllowAnonymous();
    }

    public async Task<IResult> Login(User user, IAuthService _authService)
    {
        var token = await _authService.Login(user.Username, user.Password);
        if (token is null)
            return Results.Unauthorized();

        return Results.Ok(new{ token = token, expires_on = TimeSpan.FromMinutes(30) });
    }

}
