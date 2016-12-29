using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMovies.Models
{
    public class ActorToMovieRequest
    {
        public int ActorId { get; set; }
        public string Role { get; set; }
    }
}
