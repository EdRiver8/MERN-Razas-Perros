import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import RhodesianInfoPage from "./pages/Rhodesian";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/rhodesian" element={<RhodesianInfoPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
