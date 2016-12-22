using Microsoft.AspNetCore.Mvc;
using MyMovies.DAL;
using MyMovies.Models;
using MyMovies.Services;

namespace MyMovies.Controllers
{
    public class MovieController : Controller
    {
        private MovieService _movieService;

        public MovieController(MyMoviesContext db)
        {
            _movieService = new MovieService(db);
        }

        [HttpGet, Route("movies")]
        public IActionResult GetAllMovies()
        {
            return Ok(_movieService.GetAllMovies());
        }

        [HttpPost, Route("movies")]
        public IActionResult AddMovie([FromBody]MovieRequest movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _movieService.Add(movie);

            return Ok("added");
        }

        [HttpGet, Route("movies/{id:int}")]
        public IActionResult GetById(int id)
        {
            var movie = _movieService.Find(id);
            return Ok(movie);
        }

        [HttpDelete, Route("movies/{id:int}")]
        public IActionResult Delete(int id)
        {
            _movieService.Delete(id);
            return Ok();
        }
    }
}