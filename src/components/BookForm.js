// import { useState } from "react";


// function BookForm({ onSubmit, initialData = {} }) {
// const [book, setBook] = useState({
// title: initialData.title || "",
// author: initialData.author || "",
// email: initialData.email || "",
// age: initialData.age || ""
// });


// const handleChange = (e) => {
// setBook({ ...book, [e.target.name]: e.target.value });
// };


// const validate = () => {
// if (!book.title || !book.author) return false;
// if (!/^[^@]+@[^@]+\.[^@]+$/.test(book.email)) return false;
// if (isNaN(book.age)) return false;
// return true;
// };


// const handleSubmit = (e) => {
// e.preventDefault();
// if (validate()) onSubmit(book);
// else alert("Validation failed");
// };


// return (
// <form onSubmit={handleSubmit}>
// <input name="title" placeholder="Title" onChange={handleChange} />
// <input name="author" placeholder="Author" onChange={handleChange} />
// <input name="email" placeholder="Email" onChange={handleChange} />
// <input name="age" placeholder="Age" onChange={handleChange} />
// <button type="submit">Save</button>
// </form>
// );
// }


// export default BookForm;

import { useState } from "react";

function BookForm({ onSubmit, initialData }) {

    const [book, setBook] = useState({
        title: initialData?.title || "",
        author: initialData?.author || "",
        email: initialData?.email || "",
        age: initialData?.age || ""
    });



    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};

        if (!book.title.trim()) tempErrors.title = "Title is required";
        if (!book.author.trim()) tempErrors.author = "Author is required";

        if (!book.email) {
            tempErrors.email = "Email is required";
        } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(book.email)) {
            tempErrors.email = "Invalid email format";
        }


        if (!book.age) {
            tempErrors.age = "Age is required";
        } else if (isNaN(book.age)) {
            tempErrors.age = "Age must be a number";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(book);
            alert("Book Added Successfully");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    className="form-control"
                    name="title"
                    onChange={handleChange}
                    value={book.title}
                />
                <small className="text-danger">{errors.title}</small>
            </div>

            <div>
                <label>Author:</label><br />
                <input name="author" onChange={handleChange} />
                <p style={{ color: "red" }}>{errors.author}</p>
            </div>

            <div>
                <label>Email:</label><br />
                <input name="email" onChange={handleChange} />
                <p style={{ color: "red" }}>{errors.email}</p>
            </div>

            <div>
                <label>Age:</label><br />
                <input name="age" onChange={handleChange} />
                <p style={{ color: "red" }}>{errors.age}</p>
            </div>

            <button type="submit">Save Book</button>
        </form>
    );
}

export default BookForm;
