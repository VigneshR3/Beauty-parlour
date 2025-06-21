import { useState } from "react";
 import '../node_modules/leaflet/dist/leaflet.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/home/Index";
import Notpage from "./pages/Notpage/notpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Notpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
