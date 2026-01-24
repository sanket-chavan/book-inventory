// function Home() {
//     return <h2>Home Page</h2>;
//   }
  
//   export default Home;

import BookList from "../components/BookList";

function Home() {
  return (
    <div>
      <h2>Book Inventory</h2>
      <BookList />
    </div>
  );
}

export default Home;
