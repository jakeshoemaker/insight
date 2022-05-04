namespace Insight.API.Extensions.Startup;

public static class EndpointExtensions
{
    public static void AddEndpointDefinitions(
        this IServiceCollection services,
        IConfiguration configuration,
        params Type[] assemblies)
    {
        var endpoints = new List<IEndpoint>();
        foreach (var assembly in assemblies)
        {
            endpoints.AddRange(
                assembly.Assembly.ExportedTypes
                    .Where(x => typeof(IEndpoint).IsAssignableFrom(x) && !x.IsAbstract && !x.IsInterface)
                    .Select(Activator.CreateInstance).Cast<IEndpoint>());

        }
        services.AddSingleton(endpoints as IReadOnlyCollection<IEndpoint>);
    }

    public static void UseEndpointDefinitions(this WebApplication app)
    {
        var endpoints = app.Services.GetRequiredService<IReadOnlyCollection<IEndpoint>>();

        foreach (var endpoint in endpoints)
        {
            endpoint.DefineEndpoints(app);
        }
    }
}

