namespace Insight.API.Persistence.Contexts;

public class InsightContext : DbContext
{
    public InsightContext(DbContextOptions<InsightContext> options)
        : base(options) { 
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

    public DbSet<User> Users { get; set; }
}
