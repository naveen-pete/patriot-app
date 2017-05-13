using Microsoft.EntityFrameworkCore;
using patriot.Core.Models;

namespace patriot.Persistence
{
    public class PatriotDbContext : DbContext
    {
        public DbSet<Make> Makes { get; set; }
        public DbSet<Feature> Features { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }

        public PatriotDbContext(DbContextOptions<PatriotDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleFeature>().HasKey(
                vf => new { vf.VehicleId, vf.FeatureId }
            );
        }
    }
}
