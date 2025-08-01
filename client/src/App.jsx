import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Result from "./pages/Result";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignInButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <SignInButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
