using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyNotesWall.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyNotesWall.Controllers
{
    [Route("api/[controller]")]
    public class NoteController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<NoteResponse> getNotes()
        {
            
        NoteResponse noteResponse1 = new NoteResponse()
        {
            Title = "pierwsza",
            Content = "druga"
        };
        NoteResponse noteResponse2 = new NoteResponse()
        {
            Title = "drugi tytul",
            Content = "drugi content"
        };

        List<NoteResponse> lista = new List<NoteResponse>();
        lista.Add(noteResponse1);
        lista.Add(noteResponse2);
        return lista.ToArray();
        }

        [HttpPost("[action]")]
        public NoteRequest addNote([FromBody] NoteRequest note)
        {
            
            if (!ModelState.IsValid)
            {
                note.Content = ModelState.ErrorCount.ToString();
                return note;
            }
            return note;
        }
    }
}
