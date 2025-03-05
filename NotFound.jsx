import { Link } from 'react-router-dom';
function NotFound(){
    return(
        <>
        <h1>Page Not Found</h1>
        <Link to={`/`}><button>Go Home</button></Link>
        </>
    )
}
export default NotFound