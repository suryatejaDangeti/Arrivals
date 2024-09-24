import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import Login from './components/Login/Login';
import ProductsFilter from "./components/ProductsFilter/ProductsFilter";
import Footer from "./components/Footer/Footer";
import * as ReactDOM from "react-dom/client";
import { Outlet } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetailPage from "./components/ProductDetailPage/ProductDetailPage";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/CartPage/CartPage";
import { store } from "./store";
import { lazy } from 'react';
import MobileFooters from "./components/MobileFooter/MobileFooter";


function App() {
  const footer = window.screen.width <= '768' ? <MobileFooters /> : <Footer />

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        {footer}
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/wishlist',
          element: <Wishlist />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/search/:productName',
          element: <ProductListingPage />
        },
        {
          path: '/plp',
          element: <ProductListingPage />,
        },
        {
          path: '/pdp',
          element: <ProductDetailPage />
        },
        {
          path: '*',
          element: <h1>Page not found</h1>,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
    // <div>
    //   {/* <Navbar /> */}
    //   {/* <LandingPage /> */}
    //   {/* <ProductsFilter /> */}
    //   {/* <ProductListingPage /> */}
    // </div>
  );
}

export default App;
