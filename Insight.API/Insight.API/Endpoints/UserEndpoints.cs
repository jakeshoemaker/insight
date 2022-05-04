namespace Insight.API.Endpoints;

public class UserEndpoints : IEndpoint
{
    public void DefineEndpoints(WebApplication app)
    {
        app.MapGet("/api/users", GetAll).AllowAnonymous();
        app.MapGet("/api/users/{id}", Get);
        app.MapPost("/api/users", Post);
        app.MapPut("/api/users/{id}", Put);
        app.MapDelete("/api/users/{id}", Delete);
    }

    public async Task<IResult> GetAll(IUserService _service)
    {
        return Results.Ok(await _service.GetAllUsers());
    }

    public async Task<IResult> Get(Guid id, IUserService _service)
    {
        var result = await _service.GetUserById(id);
        if (result is null)
            return Results.NotFound();
        return Results.Ok(result);
    }

    public async Task<IResult> Post(User user, IUserService _service)
    {
        var newUser = await _service.CreateUser(user);
        return Results.Ok(newUser);
    }

    public async Task<IResult> Put(User user, IUserService _service)
    {
        return Results.Ok(await _service.UpdateUser(user));
    }

    public async Task<IResult> Delete(Guid id, IUserService _service)
    {
        await _service.DeleteUser(id);
        return Results.Accepted();
    }
}