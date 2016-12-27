using Microsoft.EntityFrameworkCore;
using MyMovies.DAL;
using MyMovies.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace MyMovies.Services
{
    public class ReviewService
    {
        private MyMoviesContext _db;

        public ReviewService(MyMoviesContext db)
        {
            _db = db;
        }
        internal ReviewResponse AddReviewToMovie(int movieId, ReviewRequest request)
        {
            var movie = _db.Movies.Single(m=>m.Id==movieId);
            if (movie.Reviews == null) { movie.Reviews = new List<Review>(); }
                movie.Reviews.Add(new Review()
                {
                    Comment = request.Comment,
                    Rate = request.Rate
                });

                _db.SaveChanges();

            var review = _db.Movies
                .Include(m => m.Reviews)
                .Single(mo=>mo.Id==movieId)
                .Reviews
                .Single(x => x.Comment == request.Comment);
                 
                 

            return new ReviewResponse()
            {
                Id=review.Id,
                Comment=review.Comment,
                Rate=review.Rate
            };
                
        }
        

        internal IEnumerable<ReviewResponse> GetReviewsForMovie(int movieId)
        {

           return _db.Movies
                .Include(m => m.Reviews)
                .Where(i => i.Id == movieId)
                .Select(r => r.Reviews
                .Select(x => new ReviewResponse()
                {
                    Comment = x.Comment,
                    Id = x.Id,
                    Rate = x.Rate
                }
                ).ToList()
                ).FirstOrDefault();

        }

        internal void deleteReview(int movieId, int commentId)
        {
            var review = _db.Movies
                .Include(x => x.Reviews)
                .Single(m => m.Id == movieId)
                .Reviews
                .Single(r => r.Id == commentId);
            _db.Remove(review);
            _db.SaveChanges();
                
                
                
        }
    }
}