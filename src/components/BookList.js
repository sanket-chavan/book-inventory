// import { useNavigate } from "react-router-dom";

// function BookList() {
//   const navigate = useNavigate();

//   const books = [
//     { id: 1, title: "Clean Code", author: "Robert C. Martin" },
//     { id: 2, title: "Effective Java", author: "Joshua Bloch" }
//   ];

//   return (
//     <table border="1" width="100%">
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//         </tr>
//       </thead>
//       <tbody>
//         {books.map(book => (
//           <tr key={book.id}>
//             <td
//               style={{ cursor: "pointer", color: "blue" }}
//               onClick={() => navigate(`/book/${book.id}`)}
//             >
//               {book.title}
//             </td>
//             <td>{book.author}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default BookList;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks, deleteBook } from "../api/bookService";

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const loadBooks = () => {
    getBooks().then(res => setBooks(res.data));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteBook(id);
      loadBooks();
    }
  };

  return (
    <div className="container mt-4">
      <div style={{ maxHeight: "350px", overflowY: "auto" }}>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/book/${book.id}`)}
                >
                  {book.title}
                </td>
                <td>{book.author}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => navigate(`/edit/${book.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default BookList;
