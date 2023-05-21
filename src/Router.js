import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductsList from "./Pages/ProductsList/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/products-list',
        element: <ProductsList />,
    },
    {
        path: '/product-details/:id',
        element: <ProductDetails />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    }
]);

export default Routes;