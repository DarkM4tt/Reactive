import "./App.css";
import Header from "./components/Header";
import Rent from "./pages/Rent";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Header />
      <Rent />
      {/* <Routes>
      
          <Route path="/rent" element={<Rent />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
