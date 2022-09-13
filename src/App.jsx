import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/homePage";
import ErrorPage from "./Pages/errorPage";
import Category from "./Pages/category";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<HomePage />} />
          <Route path="/catalogo/:categoryName" element={<Category />} />
          <Route
            path="/catalogo/:categoryName/new"
            element={<ErrorPage status={500} />}
          />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
