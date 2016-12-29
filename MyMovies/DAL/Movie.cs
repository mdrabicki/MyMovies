﻿using System.Collections.Generic;

namespace MyMovies.DAL
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        public virtual ICollection<Role> Characters { get; set; }
    }
}