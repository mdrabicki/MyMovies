using MyMovies.DAL;
using MyMovies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMovies.Services
{
    public class MovieService
    {
        private MyMoviesContext _db;
        public MovieService(MyMoviesContext db)
        {
            _db = db;
        }

        internal void Add(MovieRequest movie)
        {

            _db.Movies.Add(new Movie()
            {
                Title = movie.Title,
                Year = movie.Year
            });
            _db.SaveChanges();

        }

        internal MovieResponse Find(int id)
        {
            var movie = _db.Movies.Single(m => m.Id == id);
            if (movie == null)
            {
                return null;
            }

            return new MovieResponse()
            {
                Id = movie.Id,
                Title = movie.Title,
                Year = movie.Year
            };

        }

        internal IEnumerable<MovieResponse> GetAllMovies()
        {

            return _db.Movies.Select(movie => new MovieResponse()
            {
                Id = movie.Id,
                Title = movie.Title,
                Year = movie.Year
            }).ToList();

        }

        internal void Delete(int id)
        {

            var movie = _db.Movies.Single(m => m.Id == id);
            if (movie == null)
            {
                return;
            }

            _db.Movies.Remove(movie);
            _db.SaveChanges();

        }
    }
}
