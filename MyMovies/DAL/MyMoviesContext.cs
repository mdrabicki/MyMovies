using Microsoft.EntityFrameworkCore;

namespace MyMovies.DAL
{
    public class MyMoviesContext : DbContext
    {
        public MyMoviesContext(DbContextOptions<MyMoviesContext> options) 
            : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; }
    }
}