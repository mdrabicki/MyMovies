using MyMovies.DAL;
using MyMovies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMovies.Services
{
    public class ActorService
    {

        private MyMoviesContext _db;
        public ActorService(MyMoviesContext db)
        {
            _db = db;
        }
        public ActorResponse addActor(ActorRequest actor)
        {
            _db.Actors.Add(
                new Actor()
                {
                    FirstName = actor.FirstName,
                    LastName = actor.LastName,
                    Birthday = actor.Birthday
                });
            _db.SaveChanges();
            var actorAdded = _db.Actors.Last(x => x.LastName == actor.LastName);

            return new ActorResponse()
            {
                Birthday = actorAdded.Birthday,
                Id = actorAdded.Id,
                FirstName=actorAdded.FirstName,
                LastName=actorAdded.LastName
            };
        }

        internal ActorResponse getActorDetail(int id)
        {
            var actor = _db.Actors.Single(x => x.Id == id);
            return new ActorResponse()
            {
                Id = actor.Id,
                Birthday = actor.Birthday,
                FirstName = actor.FirstName,
                LastName = actor.LastName,
            };
        }

        internal ICollection<ActorResponse> getAllActors()
        {
            return _db.Actors.Select(
                         actor => new ActorResponse()
                         {
                             Id = actor.Id,
                             Birthday = actor.Birthday,
                             FirstName = actor.FirstName,
                             LastName = actor.LastName
                         }).ToList();
               
        }

        internal ICollection<ActorResponse> SearchActors(string actorName)
        {
            return _db.Actors
                .Where(x => x.FirstName.Contains(actorName) || x.LastName.Contains(actorName))
                .Select(actor => new ActorResponse()
                {
                    Id=actor.Id,
                    FirstName=actor.FirstName,
                    LastName=actor.LastName,
                    Birthday=actor.Birthday
                }).ToList();
        }
    }
}
