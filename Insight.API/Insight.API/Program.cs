using Insight.API.Endpoints;
using Insight.API.Options;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointDefinitions(builder.Configuration, typeof(UserEndpoints));
builder.Services.AddEndpointsApiExplorer();

// plaid setup
builder.Configuration.AddYamlFile("secrets.yml", optional: true);

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
            policy.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
});


// configure database & services
builder.Services.RegisterPersistence(builder.Configuration);
builder.Services.RegisterServices(builder.Configuration);

var app = builder.Build();

// register all endpoints
app.UseEndpointDefinitions();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("clientPolicy");
app.UseAuthentication();
app.UseAuthorization();

app.UseHttpsRedirection();

app.Run();

