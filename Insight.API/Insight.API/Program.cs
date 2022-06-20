using Insight.API.Endpoints;
using Insight.API.Options;
using Insight.API.Utilities;
using Microsoft.AspNetCore.Http.Json;
using Microsoft.OpenApi.Models;
using Serilog;

// setup logging here so we catch startup errors
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

// now build the program so we have logging coverage
try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Services.AddEndpointDefinitions(builder.Configuration, typeof(UserEndpoints));
    builder.Services.AddEndpointsApiExplorer();


    // plaid setup
    builder.Configuration.AddYamlFile("secrets.yml", optional: true);

    // logging setup
    // builder.Host.UseSe;
    builder.Host.UseSerilog((ctx, lc) => lc
            .WriteTo.Console()
            .ReadFrom.Configuration(ctx.Configuration));

    var jwtOptions = new JwtOptions();
    builder.Configuration.Bind(nameof(jwtOptions), jwtOptions);
    builder.Services.AddSingleton(jwtOptions);
    builder.Services.AddSwaggerGen(x =>
    {
        x.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            Description = "JWT authorization header using the bearer scheme",
            Name = "authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.ApiKey
        });
        x.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Id = "Bearer",
                        Type = ReferenceType.SecurityScheme
                    }
                }, new List<string>()
            }
        });
    });

    builder.Services.AddAuthorization(opt =>
    {
        opt.FallbackPolicy = new AuthorizationPolicyBuilder()
            .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
            .RequireAuthenticatedUser()
            .Build();
    });
    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(x =>
    {
        x.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = false,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration.GetSection("auth")["issuer"],
            ValidAudience = builder.Configuration.GetSection("auth")["issuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(
                builder.Configuration.GetSection("auth")["secret"]))
        };
    });
    builder.Services.AddCors(opt =>
    {
        opt.AddPolicy(name: "clientPolicy",
            policy =>
            {
                policy.WithOrigins("http://localhost:4200")
                    .AllowAnyMethod()
                .AllowAnyHeader();
            });
    });


    // configure database & services
    builder.Services.RegisterPersistence(builder.Configuration);
    builder.Services.RegisterServices(builder.Configuration);

    // json Options
    builder.Services.Configure<JsonOptions>(opt => 
    {
        opt.SerializerOptions.Converters.Add(new DateOnlyConverter());
    });

    var app = builder.Build();

    // register all endpoints
    app.UseEndpointDefinitions();

    // Configure the HTTP request pipeline.
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseCors("clientPolicy");
    app.UseAuthentication();
    app.UseAuthorization();

    //app.UseHttpsRedirection();
    
    app.UseSerilogRequestLogging();

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Unhandled exception");
}
finally
{
    Log.CloseAndFlush();
}
