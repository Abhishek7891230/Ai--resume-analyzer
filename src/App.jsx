import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResultSection } from "./pages/ResultSection";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultSection />} />
      </Routes>
    </Router>
  );
}
