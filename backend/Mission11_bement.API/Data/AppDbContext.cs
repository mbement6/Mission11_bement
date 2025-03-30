using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Mission11_bement.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; }
    }
}

