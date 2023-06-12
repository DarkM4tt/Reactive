import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Rent from "./pages/Rent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/rent" element={<Rent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
