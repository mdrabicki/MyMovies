﻿using System;
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
    
    public class ReviewController : Controller
    {
        private ReviewService _reviewService;

        public ReviewController(MyMoviesContext db )
        {
            _reviewService = new ReviewService(db);
        }

       
         

        [HttpPost,Route("review/{movieId:int}")]
        public IActionResult AddReviewToMovie(int movieId,[FromBody] ReviewRequest request)
        {
            _reviewService.AddReviewToMovie(movieId, request);
            return Ok();
        }

        [HttpGet, Route("review/{movieId:int}")]
        public IActionResult GetReviewsForMovie(int movieId)
        {
            var reviews =_reviewService.GetReviewsForMovie(movieId);
            return Ok(reviews);
        }
    }
}