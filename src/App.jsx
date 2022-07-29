import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/pages/Home";
import About from "./layout/pages/About";
import Contact from "./layout/pages/Contact";
import Error from "./components/Error";
import Category from "./layout/pages/Category";
import FoodRecipe from "./components/FoodRecipe";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="category/:name/meal/:id" element={<FoodRecipe />}  />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
