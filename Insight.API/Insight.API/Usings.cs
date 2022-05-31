global using Insight.API.Extensions.Startup;
global using Insight.API.Services;
global using Insight.API.Services.Auth;
global using Insight.API.Services.Interfaces;
global using Insight.API.Persistence.Contexts;
global using Insight.API.Persistence.Models;

global using Going.Plaid;
global using Going.Plaid.Entity;
global using Going.Plaid.Item;
global using Going.Plaid.Link;

global using Microsoft.AspNetCore.Authentication.JwtBearer;
global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Builder;
global using Microsoft.AspNetCore.Http;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.Extensions.Hosting;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.IdentityModel.Tokens;


global using System;
global using System.ComponentModel.DataAnnotations;
global using System.Collections.Generic;
global using System.IdentityModel.Tokens.Jwt;
global using System.Linq;
global using System.Security.Claims;
global using System.Text;
