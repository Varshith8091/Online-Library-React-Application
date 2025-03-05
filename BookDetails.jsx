
import { useParams,useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

function BookDetails(){
    const books = useSelector((state) => state.books);
    const { id } = useParams();
    const book1 = books.find((book1) => book1.id === id);
    const navigate = useNavigate();
    return book1 ? (
        <span className='bookDetails'>
          <h1> {book1.title} </h1>
          <p><strong>Author:</strong> {book1.author} </p>
          <p><strong>Description:</strong> {book1.description}</p>
          <p><strong>Rating:</strong> {book1.rating} / 5</p>
          <p><strong>Genre:</strong> {book1.genre}</p>

        <button onClick={() => navigate('/Browsebooks')}>Back to Browse</button>
        <br></br>
      </span>
    ): (
        <span>
          <h1>Book Not Found</h1>
          <button onClick={() => navigate('/BrowseBooks')}>Back to Browse</button>
          <br></br>
        </span>
      );
}
export default BookDetails