// import { useParams } from "react-router-dom";

// function BookDetails() {
//   const { id } = useParams();

//   return (
//     <div>
//       <h2>Book Details</h2>
//       <p>Book ID: {id}</p>
//     </div>
//   );
// }

// export default BookDetails;




// // function BookDetails() {
// //     return <h2>Book Details Page</h2>;
// //   }
  
// //   export default BookDetails;

//new comments added in BookDetails component

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../api/bookService";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const ooob = 10;
  
  useEffect(() => {
    getBookById(id).then(res => setBook(res.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Email:</b> {book.email}</p>
      <p><b>Age:</b> {book.age}</p>
    </div>
  );
}

export default BookDetails;
