using Microsoft.EntityFrameworkCore;
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

        internal MovieResponse Add(MovieRequest movie)
        {
           
            _db.Movies.Add(new Movie()
            {
                Title = movie.Title,
                Year = movie.Year
            });
            _db.SaveChanges();
            Movie movieAdd = _db.Movies.Last(x => x.Title == movie.Title);
            return new MovieResponse()
            {
                Id = movieAdd.Id,
                Title = movieAdd.Title,
                Year = movieAdd.Year

            };

        }

        internal MovieResponse GetMovieDetails(int id)
        {
            //TODO: Bug: Movies.Actors.Movies.Actors...
            var movie = _db.Movies
                .Include(x => x.Characters)
                .ThenInclude(a=>a.Actor)
                .Single(m => m.Id == id);
            if (movie == null)
            {
                return null;
            }

            var response = new MovieResponse()
            {
                Id = movie.Id,
                Title = movie.Title,
                Year = movie.Year,
            };
            response.Actors = movie.Characters
                .Select(a => new ActorToMovieResponse()
                {
                    FirstName = a.Actor.FirstName,
                    Id = a.Actor.Id,
                    LastName = a.Actor.LastName,
                    Role = a.RoleName
                }).ToList();

            return response;

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

        internal void AddActorToMovie(int movieId, ActorToMovieRequest actorToMovie)
        {
            var movie = _db.Movies.Include(r=>r.Characters).Single(m => m.Id == movieId);
            var role = new Role()
            {
                Actor = _db.Actors.Single(a=>a.Id==actorToMovie.ActorId),
                Movie = movie,
                RoleName = actorToMovie.Role
            };
            movie.Characters.Add(role);
            _db.SaveChanges();
            return;
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
