import React, { useEffect, useState } from "react";

interface Book {
  bookId: number;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  classification: string;
  pages: number;
  price: number;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortField, setSortField] = useState("title");
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    fetch(`/api/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container mt-3">
      <h2>Book List</h2>
      <div className="mb-3">
        <label>Sort By:</label>
        <select
          onChange={(e) => setSortField(e.target.value)}
          value={sortField}
          className="form-select"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <button
          onClick={() => setAscending(!ascending)}
          className="btn btn-secondary ms-2"
        >
          {ascending ? "Ascending" : "Descending"}
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
            <th>Classification</th>
            <th>Pages</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.slice((page - 1) * pageSize, page * pageSize).map((book) => (
            <tr key={book.bookId}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.isbn}</td>
              <td>{book.classification}</td>
              <td>{book.pages}</td>
              <td>${book.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="btn btn-primary"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * pageSize >= books.length}
          className="btn btn-primary"
        >
          Next
        </button>
        <select
          onChange={(e) => setPageSize(parseInt(e.target.value))}
          value={pageSize}
          className="form-select w-auto"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
};

export default BookList;
