namespace Insight.API.Persistence.Contexts;

public class InsightContext : DbContext
{
    public InsightContext(DbContextOptions<InsightContext> options)
        : base(options) { }
    public DbSet<User> Users { get; set; }
}
