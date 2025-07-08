import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Category from "../components/Category/Category";
import Account from "../components/Account/Account";
import Search from "../components/Search/Search";
import AllCategories from "../components/AllCategories/AllCategories";
import Cart from "../components/Cart/Cart";
import Home from "../components/Home/Home";
import PrivacyPolicy from "../components/common/PrivacyPolicy";
import TermsAndConditions from "../components/common/TermsAndConditions";
import OTPLogin from "../components/Account/OTPLogin";

const MyRoutes = () => {
  const { isloggedIn } = useSelector((state) => state.authSlice);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<AllCategories />} />
      <Route path="/product/:productid" element={<ProductDetails />} />
      <Route path="/category/:id/:subid" element={<Category />} />
      <Route
        path="/category/:id/:subid/:productid"
        element={<ProductDetails />}
      />
      {/* <Route path="/shopRegistion" element={<ShopRegistration />} /> */}
      <Route path="/OTPLogin" element={<OTPLogin />} />

      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      {isloggedIn && <Route path="/cart" element={<Cart />} />}
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Home />} />
      {isloggedIn && <Route path="/account/*" element={<Account />} />}
    </Routes>
  );
};

export default MyRoutes;
