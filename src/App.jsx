import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import BordercollieInfoPage from "./pages/Bordercollie";
import Home from "./pages/Home";
import RhodesianInfoPage from "./pages/Rhodesian";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* este layout va a estar en todas las rutas hijas */}
        <Layout>
          <Routes>
            <Route path="/rhodesian" element={<RhodesianInfoPage />} />
            <Route path="/bordercollie" element={<BordercollieInfoPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
