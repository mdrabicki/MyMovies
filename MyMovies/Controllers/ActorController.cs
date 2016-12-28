using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyMovies.DAL;
using MyMovies.Services;
using MyMovies.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyMovies.Controllers
{
    
    public class ActorController : Controller
    {
        private ActorService _actorService;

        public ActorController(MyMoviesContext db)
        {
            _actorService = new ActorService(db);
        }

        // GET: api/values
        [HttpGet, Route("actors")]
        public IActionResult GetAllActors()
        {
            return Ok(_actorService.getAllActors());
        }

        // GET api/values/5
        [HttpGet Route("actors/{id}")]
        public IActionResult GetActorDetail(int id)
        {
            ActorResponse response = _actorService.getActorDetail(id);
            return Ok(response);
        }

        [HttpPost,Route("actors")]
        public IActionResult AddActor([FromBody]ActorRequest actor)
        {
            ActorResponse actorResponse = _actorService.addActor(actor);
            return Ok(actorResponse);
        }

        [HttpGet,Route("actors/{actorName}")]
        public IActionResult SearchActor(string actorName)
        {
            ICollection<ActorResponse> SearchResult =_actorService.SearchActors(actorName);

            return Ok(SearchResult);
        }

        private void SearchActors(string actorName)
        {
            throw new NotImplementedException();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
