namespace Insight.API.Services.Interfaces;

public interface IUserService
{
    Task<User> CreateUser(User user);
    Task<User> GetUserById(Guid id);
    Task<List<User>> GetAllUsers();
    Task<User> UpdateUser(User user);
    Task DeleteUser(Guid id);
}