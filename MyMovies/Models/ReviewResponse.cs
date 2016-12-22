using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMovies.Models
{
    public class ReviewResponse
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public short Rate { get; set; }
    }
}
