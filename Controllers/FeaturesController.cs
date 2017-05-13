using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using patriot.Controllers.Resources;
using patriot.Core.Models;
using patriot.Persistence;

namespace patriot.Controllers
{
    public class FeaturesController : Controller
    {
        private readonly PatriotDbContext context;
        private readonly IMapper mapper;
        public FeaturesController(PatriotDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet("/api/features")]
        public async Task<IEnumerable<KeyValuePairResource>> GetFeaturesAsync()
        {
            var features = await context.Features.ToListAsync();

            return mapper.Map<List<Feature>, List<KeyValuePairResource>>(features);
        }
    }
}