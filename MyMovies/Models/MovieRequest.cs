using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyMovies.Models
{
    public class MovieRequest
    {
        [Required]
        public string Title { get; set; }

        public int Year { get; set; }
    }
}
