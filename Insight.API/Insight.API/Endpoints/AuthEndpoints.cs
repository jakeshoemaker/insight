namespace Insight.API.Endpoints;
public class AuthEndpoints : IEndpoint
{
    public void DefineEndpoints(WebApplication app)
    {
        app.MapPost("api/auth/login", Login)
            .AllowAnonymous();

        app.MapPost("api/auth/signup", Signup)
            .AllowAnonymous();
    }

    public async Task<IResult> Login(User user, IAuthService _authService)
    {
        var result = await _authService.Login(user.Username, user.Password);
        if (result is null)
            return Results.Unauthorized();

        return Results.Ok(
            new{ 
                token = result.Item1, 
                expires_on = DateTime.Now.AddMinutes(30),
                user = result.Item2 
            });
    }

    public async Task<IResult> Signup(User user, IUserService _userService)
    {
        var newUser = await _userService.CreateUser(user);

        newUser.AccessToken = null;
        newUser.Password = null;
        return Results.Ok(newUser);
    }

}
