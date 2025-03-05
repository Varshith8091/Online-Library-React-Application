import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Browsebooks(){
const { category }=useParams();
const [ Search,setSearch ]=useState("");
const books = useSelector((state) => state.books);

const filteredBooks = books.filter((book) =>
    (Search === '' || book.title.toLowerCase().includes(Search.toLowerCase()) ||
      book.author.toLowerCase().includes(Search.toLowerCase())) &&
    (!category || book.genre === category)
  );
return(
    <>
    <h1 className="headings">{category ? `${ category } Books` : 'All' }</h1>
    <input type='text'placeholder="Enter any title or author"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}></input>
          <br></br><br></br>
    <section className='filteredBooks'> 
        {filteredBooks.map((book) => (
          <div className='filteredBook' key={book.id}>
               <Link to={`/books/${book.id}`}><img src={book.image} alt={book.title}  /></Link>
               <div className='details'>
                 <h3>{book.title}</h3>
                 <p>Author: {book.author}</p>
                 <p>Rating: <b>{book.rating}</b></p>
                 <h4>{book.genre}</h4>
                 <Link to={`/books/${book.id}`}> <button> View Details</button></Link>
               </div>  
          </div>
        ))}
    </section>      
    </>
)
}
export default Browsebooks