using System.ComponentModel.DataAnnotations;

namespace Mission11_bement.Data
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Author { get; set; }

        [Required]
        public string Publisher { get; set; }

        [Required]
        public string ISBN { get; set; }

        [Required]
        public string Classification { get; set; }

        [Required]
        public int Pages { get; set; }

        [Required]
        public decimal Price { get; set; }
    }
}

