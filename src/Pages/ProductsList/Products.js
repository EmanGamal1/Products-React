import { Link } from "react-router-dom";
import { axiosInstance } from "../../Axios";
import { Fragment, useEffect, useState } from "react";
import "./Products.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../SharedUI/Footer/Footer";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    await axiosInstance
      .get("/products")
      .then((res) => {
        setProductsList(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
        <Navbar />
      <div className="container w-75">
        <div className="row">
          {productsList.map((product) => (
            <div className="col-4 mb-3" key={product.id}>
              <Fragment key={product.id}>
                <div className="card bg-light h-100">
                  <div className="card-body">
                    <img
                      src={product.thumbnail}
                      className="cardIMG card-img-top mb-4 rounded border"
                      alt=""
                    />
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                  </div>
                  <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {product.price}$
                    <Link to={`/product-details/${product.id}`}>
                      <button className="btn btn-sm btn-outline-secondary">Details</button>
                    </Link>
                  </div>
                </div>
              </Fragment>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default ProductsList;
