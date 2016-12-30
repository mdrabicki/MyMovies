using Microsoft.EntityFrameworkCore;

namespace MyMovies.DAL
{
    public class MyMoviesContext : DbContext
    {
        public MyMoviesContext(DbContextOptions<MyMoviesContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>()
               .HasKey(r => new { r.ActorId, r.MovieId });

            modelBuilder.Entity<Role>()
                .HasOne(r => r.Actor)
                .WithMany(a => a.Roles)
                .HasForeignKey(k => k.ActorId);

            modelBuilder.Entity<Role>()
                .HasOne(r => r.Movie)
                .WithMany(m => m.Characters)
                .HasForeignKey(k => k.MovieId);
            modelBuilder.Entity<Movie>()
                .HasMany(r => r.Reviews)
                .WithOne(m => m.Movie)
                .OnDelete(Microsoft.EntityFrameworkCore.Metadata.DeleteBehavior.Cascade);
                
                
        }


        public DbSet<Movie> Movies { get; set; }
        public DbSet<Actor> Actors { get; set; }


    }
}