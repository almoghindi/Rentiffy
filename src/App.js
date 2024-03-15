import "./App.css";
import Navbar from "./layout/header/navbar";
import LandingPage from "./pages/landing-page";
import Login from "./features/auth/Login/login";
import Signup from "./features/auth/Signup/signup";
import EnterMailResetPassword from "./features/auth/ResetPassword/enterMailResetPassword";
import EnterPasswordResetPassword from "./features/auth/ResetPassword/enterPasswordResetPassword";
import CompleteResetPassword from "./features/auth/ResetPassword/completeResetPassword";
import Search from "./features/search/Search";
import ProductDetails from "./features/product/productDetails";
import PreviewProduct from "./features/product/previewProduct";
import UploadProduct from "./features/product/uploadProduct";
import FAQ from "./features/faq/faq";
import ConfirmDeal from "./features/product/confirmDeal";
import Profile from "./features/profile/profile";
import PaymentDetails from "./features/profile/paymentDetails";
import Notifications from "./features/profile/notifications";
import MyItems from "./features/profile/myItems";
import RentedItems from "./features/profile/rentedItems";
import Footer from "./layout/footer/footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<EnterMailResetPassword />} />
          <Route
            path="/resetpassword/enterpassword"
            element={<EnterPasswordResetPassword />}
          />
          <Route
            path="/resetpassword/complete"
            element={<CompleteResetPassword />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/upload-product" element={<UploadProduct />} />
          <Route path="/preview-product" element={<PreviewProduct />} />
          <Route path="/confirmdeal" element={<ConfirmDeal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/payment-details" element={<PaymentDetails />} />
          <Route
            path="/profile/notifications"
            element={<Notifications />}
          />{" "}
          <Route path="/profile/my-items" element={<MyItems />} />
          <Route path="/profile/rented-items" element={<RentedItems />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");

export default App;
