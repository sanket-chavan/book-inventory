// function EditBook() {
//     return <h2>Edit Book Page</h2>;
//   }
  
//   export default EditBook;
  

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import { getBookById, updateBook } from "../api/bookService";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(res => setBook(res.data));
  }, [id]);

  const handleUpdate = async (updatedBook) => {
    await updateBook(id, updatedBook);
    alert("Book updated");
    navigate("/");
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Book</h2>
      <BookForm onSubmit={handleUpdate} initialData={book} />
    </div>
  );
}

export default EditBook;
