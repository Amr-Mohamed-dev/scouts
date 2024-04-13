import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/About us/AboutUs.jsx";
import ContactUs from "./pages/Contact us/ContactUs.jsx";
import Developers from "./pages/Developers/Developers.jsx";
import Carrers from "./pages/Carrers/Carrers.jsx";
import News from "./pages/News/News.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/developers"
          element={
            <>
              <NavBar />
              <Developers />
              <Footer />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <NavBar />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/carrers"
          element={
            <>
              <NavBar />
              <Carrers />
              <Footer />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <NavBar />
              <News />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <NavBar />
              <Blogs />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <NavBar />
              <ContactUs />
              <Footer />
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
