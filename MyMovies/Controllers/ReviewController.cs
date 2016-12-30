using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyMovies.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MyMovies.Services;
using MyMovies.DAL;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyMovies.Controllers
{
    [Route("review/{movieId:int}")]
    public class ReviewController : Controller
    {
        private ReviewService _reviewService;

        public ReviewController(MyMoviesContext db )
        {
            _reviewService = new ReviewService(db);
        }

       
         

        [HttpPost]
        public IActionResult AddReviewToMovie(int movieId,[FromBody] ReviewRequest request)
        {
            ReviewResponse response = _reviewService.AddReviewToMovie(movieId, request);
            return Ok(response);
        }

        [HttpGet]
        public IActionResult GetReviewsForMovie(int movieId)
        {
            var reviews =_reviewService.GetReviewsForMovie(movieId);
            return Ok(reviews);
        }

        [HttpDelete, Route("{commentId:int}")]
        public IActionResult DeleteReview(int movieId,int commentId) 
        {
            _reviewService.deleteReview(movieId, commentId);
            return Ok();
        }
    }
}
