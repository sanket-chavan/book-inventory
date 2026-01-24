// // function AddBook() {
// //     return <h2>Add Book Page</h2>;
// //   }
  
// //   export default AddBook;

// import BookForm from "../components/BookForm";

// function AddBook() {
//   const handleAddBook = (book) => {
//     console.log("Book data:", book);
//   };

//   return (
//     <div>
//       <h2>Add Book</h2>
//       <BookForm onSubmit={handleAddBook} />
//     </div>
//   );
// }

// export default AddBook;

import BookForm from "../components/BookForm";
import { addBook } from "../api/bookService";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();

  const handleAddBook = async (book) => {
    await addBook(book);
    alert("Book saved to API");
    navigate("/");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
}

export default AddBook;

