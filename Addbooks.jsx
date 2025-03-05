import { useState } from "react";
import { Categories } from "../utils/Categories"
import { useDispatch } from "react-redux";
import { addBook } from "../utils/booksSlice";
import { useNavigate } from "react-router-dom";
function Addbooks(){
    const [form, setForm] = useState({ title: '', author: '', description: '', rating: '', genre: '' });
    const [image, setImage] = useState(null);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = () => setImage(reader.result); 
          reader.readAsDataURL(file);
        } else {
          alert('Please upload a valid image file (jpg, png, etc.).');
          setImage(null);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
          alert('Please upload an image for the book.');
          return;
        }
        dispatch(addBook({ ...form, id: Date.now().toString(), image: image }))
        navigate(`/Browsebooks`); 
       }   
    return(
        <>
        <h1 className="headings">Add Books</h1>
        <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <input className="formstyle" name="title" placeholder="Title" onChange={handleChange} required /><br />

        <label>Author</label>
        <input className="formstyle"name="author" placeholder="Author" onChange={handleChange} required /><br />

        <label>Description</label>
        <textarea className="formstyle" name="description" placeholder="Description" onChange={handleChange} required /><br />

        <label>Rating</label>
        <input className="formstyle" name="rating" type="number" max={5} min={0} step={0.1} placeholder="Rating out of 5" onChange={handleChange} required /><br />
        
        <label>Genre</label>
        <select className="formstyle" name="genre" onChange={handleChange} required>
          {Categories.map((category) => (
            <option key={category.id} value={category.type}>
              {category.type}
            </option>
          ))}
        </select><br />
        <label htmlFor="bookImage">Book Image</label>
        <input className="formstyle" id="bookImage" type="file" accept="image/*" onChange={handleImageChange} required /><br />
        
        <button  className="formstyle" type="submit">Add</button>
      </form>
        </>
    )
    }
    export default Addbooks
