using Microsoft.AspNetCore.Mvc;
using MyMovies.DAL;
using MyMovies.Models;
using MyMovies.Services;

namespace MyMovies.Controllers
{
    [Route("api/movies/")]
    public class MovieController : Controller
    {
        private MovieService _movieService;

        public MovieController(MyMoviesContext db)
        {
            _movieService = new MovieService(db);
        }

        [HttpGet]
        public IActionResult GetAllMovies()
        {
            return Ok(_movieService.GetAllMovies());
        }

        [HttpPost]
        public IActionResult AddMovie([FromBody]MovieRequest movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            MovieResponse movieResponse = _movieService.Add(movie);

            return Ok(movieResponse);
        }

        [HttpGet, Route("{id:int}")]
        public IActionResult GetById(int id)
        {
            var movie = _movieService.GetMovieDetails(id);
            return Ok(movie);
        }

        [HttpDelete, Route("{id:int}")]
        public IActionResult Delete(int id)
        {
            _movieService.Delete(id);
            return Ok();
        }

        [HttpPost, Route("{movieId:int}")]
        public IActionResult AddActorToMovie(int movieId,[FromBody] ActorToMovieRequest actorToMovie)
        {
            _movieService.AddActorToMovie(movieId, actorToMovie);
            return Ok();
        }
    }
}