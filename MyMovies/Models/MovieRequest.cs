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
        [Range(typeof(int),"1900","2017")]
        public int Year { get; set; }
    }
}
