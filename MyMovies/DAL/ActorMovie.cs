using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMovies.DAL
{
    public class ActorMovie
    {
        public int Id { get; set; }

        //TODO:Change on Movie / Actor
        public Movie Movies { get; set; }
        public Actor Actors { get; set; }
        public string Role { get; set; }

    }
}
