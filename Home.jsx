import { useSelector} from "react-redux"
import { Categories } from "../utils/Categories";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const books = useSelector((store) => store.books);
    const categories = Categories
    const popularBooks = books.filter(books=>books.rating>4.3);

    const [index, setIndex] = useState(0);
    const [id, setId] = useState(0);

    function handleCategoryPrev() {
        setIndex(index === 0 ? categories.length - 1 : index - 1);
      }
      
    function handleCategoryNext() {
        setIndex(index === categories.length - 1 ? 0 : index + 1);
      }
    function handlePBPrev() {
        setId(id === 0 ? popularBooks.length - 1 : id - 1);
      }
      
    function handlePBNext() {
        setId(id === popularBooks.length - 1 ? 0 : id + 1);
      }
      
    return(
        <div className="Home">
         <h1>Learning Has No Limits</h1>
         <h2 className="headings">Categories</h2>
           <div className="Category">
           <Link to={`/Browsebooks/${categories[index].type}`}> <span className="CH">{categories[index].type}</span></Link>
             <br></br>
               <div className='buttonsCategory'>
                   <button className='prev' onClick={handleCategoryPrev}>«</button>
                   <Link to={`/Browsebooks/${categories[index].type}`}> <img src={categories[index].img} alt="" /></Link>
                   <button className='next' onClick={handleCategoryNext}>»</button>
               </div>
           </div> 
           <br></br>
           <br></br>
        <h2 className="headings">Popular Books</h2>
           <div className="Popular">
           <Link to={`/books/${popularBooks[id].id}`}><span className="PB">{popularBooks[id].title}</span></Link>  
             <br></br><br></br>
               <div className='buttonsCategory'>
                   <button className='prev' onClick={handlePBPrev}>«</button>
                   <Link to={`/books/${popularBooks[id].id}`}><span className="VM">
                    <img src={popularBooks[id].image} alt="" />
                    <button>Viewmore</button></span></Link>
                   <button className='next' onClick={handlePBNext}>»</button>
               </div>
           </div> 
        </div>
    )
}
export default Home