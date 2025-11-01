import { Navbar } from "./components/Navbar";
import { GetStarted } from "./components/getstarted";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResultSection } from "./pages/ResultSection";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetStarted />} />

        <Route path="/results" element={<ResultSection />} />
      </Routes>
    </Router>
  );
}
