namespace Insight.API.Services;

public class UserService : IUserService
{
    private readonly InsightContext _prettyCreditContext;

    public UserService(InsightContext prettyCreditContext)
    {
        _prettyCreditContext = prettyCreditContext;
    }

    public async Task<User> CreateUser(User user)
    {
        using var db = _prettyCreditContext;
        await db.Users.AddAsync(user);
        await db.SaveChangesAsync();

        return user;
    }

    public async Task<User> GetUserById(Guid id)
    {
        using var db = _prettyCreditContext;
        return await db.Users.FirstOrDefaultAsync(l => l.Id == id);
    }

    public async Task<List<User>> GetAllUsers()
    {
        using var db = _prettyCreditContext;
        return await db.Users.ToListAsync();
    }

    public async Task<User> UpdateUser(User user)
    {
        using var db = _prettyCreditContext;
        db.Users.Update(user);
        await db.SaveChangesAsync();
        return await db.Users.FirstOrDefaultAsync(l => l.Id == user.Id);
    }


    public async Task DeleteUser(Guid id)
    {
        using var db = _prettyCreditContext;
        var user = await db.Users.FirstOrDefaultAsync(l => l.Id == id);
        db.Users.Remove(user);
    }
}