import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Nft from "./pages/Nft";
import PlaceTostay from "./pages/PlaceTostay";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PlaceToStay/index.js" element={<PlaceTostay />} />
          <Route path="Nft" element={<Nft />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
