import { Link } from "react-router-dom";
import headerIMG from "../../images/header.png";
import './Home.css';
import Navbar from "../../Components/Navbar";

const Home = () => {
    return (
        <>
        <Navbar />
            <div>
        <div className="headerIMG d-flex">
          <div className="content">
            <h1>Online Shopping</h1>
            <h3>Buy all what you need!</h3>
            <Link to='/products-list'><button className="btn btn-danger mt-4">Shop Now</button></Link>
          </div>
          <div className="float-right ms-auto">
            <img src={headerIMG} alt="" className="mainImage" />
          </div>
        </div>
      </div>
        </>
    )
}

export default Home;