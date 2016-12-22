using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyMovies.Models
{
    public class ReviewRequest
    {
        [Required]
        public string Comment { get; set; }
        public short Rate { get; set; }
    }
}
