// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
// //     <div style={{ padding: "10px", background: "#ddd" }}>
// //       <Link to="/">Home</Link> |{" "}
// //       <Link to="/add">Add Book</Link>
// //     </div>
// //   );
// // }

// // export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <Link to="/">Home</Link> | <Link to="/add">Add Book</Link>
//     </div>
//   );
// }

// export default Navbar;


import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Book Inventory</span>
      <div>
        <Link className="btn btn-outline-light me-2" to="/">
          Home
        </Link>
        <Link className="btn btn-outline-light" to="/add">
          Add Book
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
