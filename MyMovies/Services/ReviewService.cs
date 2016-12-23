using MyMovies.DAL;
using MyMovies.Models;
using System.Collections.Generic;
using System.Linq;

namespace MyMovies.Services
{
    public class ReviewService
    {
        private MyMoviesContext _db;

        public ReviewService(MyMoviesContext db)
        {
            _db = db;
        }
        internal void AddReviewToMovie(int movieId, ReviewRequest request)
        {
            if(movieId==0)
            { return; }
                var movie = _db.Movies.Single(m=>m.Id==movieId);
            if (movie.Reviews == null) { movie.Reviews = new List<Review>(); }
                movie.Reviews.Add(new Review()
                {
                    Comment = request.Comment,
                    Rate = request.Rate
                });

                _db.SaveChanges();
        }
        

        internal IEnumerable<ReviewResponse> GetReviewsForMovie(int movieId)
        {
            
                var movie = _db.Movies.Single(m=>m.Id == movieId);
                return movie.Reviews.Select(x => new ReviewResponse()
                {
                    Id = x.Id,
                    Comment = x.Comment,
                    Rate = x.Rate
                }).ToList();
            
        }
    }
}