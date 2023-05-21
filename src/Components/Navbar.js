import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className="header pt-3 mb-3">
            <ul>
                <Link to='/' className="title">Home</Link>
                <Link to='/products-list' className="title">Products</Link>
            </ul>
            <hr className="hr"></hr>
        </nav>
        </>
    )
}

export default Navbar;