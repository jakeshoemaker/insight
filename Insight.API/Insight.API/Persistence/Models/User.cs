using System.ComponentModel.DataAnnotations.Schema;

namespace Insight.API.Persistence.Models;

[Table("users")]
public class User
{
    [Column("id")]
    public Guid Id { get; private set; }
    [Column("username")]
    public string Username { get; set; }
    [Column("password")]
    public string Password { get; set; }
    [Column("email")]
    public string Email { get; set; }
    [Column("access_token")]
    public string AccessToken { get; set; }
    [Column("created_on")]
    public DateTime CreatedOn { get; set; }
    [Column("last_login")]
    public DateTime? LoggedInOn { get; set; }
}