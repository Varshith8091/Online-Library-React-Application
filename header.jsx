import { Link } from "react-router-dom"
function Header(){
    return (
        <>
          <div className='nav'>
            <p><Link to={'/'}>Home</Link></p>
            <p><Link to={'/Browsebooks'}>Browse Books</Link></p>
            <p><Link to={'/addbooks'}>Add Book</Link></p>
          </div>
        </>
      );
    };
    
export default Header;