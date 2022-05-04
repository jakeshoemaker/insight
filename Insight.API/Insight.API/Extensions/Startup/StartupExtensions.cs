using Npgsql;

namespace Insight.API.Extensions.Startup;

public static class StartupExtensions
{
    public static void RegisterPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        // register db driven dependencies here
        var bldr = new NpgsqlConnectionStringBuilder();
        bldr.Host = configuration.GetSection("db")["host"];
        bldr.Port = Convert.ToInt32(configuration.GetSection("db")["port"]);
        bldr.Username = configuration.GetSection("db")["username"];
        bldr.Password = configuration.GetSection("db")["password"];
        bldr.Database = configuration.GetSection("db")["database"];
        bldr.RootCertificate = configuration.GetSection("db")["root-cert"];
        services.AddDbContext<InsightContext>(options =>
            options.UseNpgsql(bldr.ConnectionString));

        services.AddScoped<InsightContext>();
    }

    public static void RegisterServices(this IServiceCollection services, IConfiguration configuration)
    {
        // services
        services.AddTransient<IUserService, UserService>();
        services.AddTransient<IAuthService, AuthService>();
        services.AddSingleton<ITokenService>(new TokenService());
    }
}

