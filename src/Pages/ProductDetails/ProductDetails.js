import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../Axios";
import "./ProductDetails.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../SharedUI/Footer/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([null]);

  useEffect(() => {
    getProductDetails();
  });

  const getProductDetails = async () => {
    await axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProductDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return productDetails ? (
    <>
      <Navbar />
      <div className="container mb-5">
        <div className="row">
          <div className="card w-50 m-auto">
            <div className="card-body">
              <div>
                <img
                  className="img-fluid border rounded mb-3"
                  src={productDetails.thumbnail}
                  alt=""
                />
                {productDetails?.images &&
                  productDetails.images
                    .slice(0, 3)
                    .map((image, index) => (
                      <img
                        className="allIMGs me-1 mb-3"
                        key={index}
                        src={image}
                        alt=""
                      />
                    ))}
                <h4>{productDetails.title}</h4>
                <p>{productDetails.description}</p>
                <div className="row text-start mt-5">
                  <div className="col-6">
                    <p>
                      <b>Price:</b> {productDetails.price}$
                    </p>
                    <p>
                      <b>Discount Percentage:</b>{" "}
                      {productDetails.discountPercentage}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <b>Rating:</b> {productDetails.rating}
                    </p>
                    <p>
                      <b>Stock:</b> {productDetails.stock}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <b>Brand:</b> {productDetails.brand}
                    </p>
                  </div>

                  <div className="col-6">
                    <p>
                      <b>Category:</b> {productDetails.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <p>Loading</p>
  );
};

export default ProductDetails;
