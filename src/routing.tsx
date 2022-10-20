import { BrowserRouter, Routes, Route } from "react-router-dom";
import {GlobalStyle} from "./pages/styles/GlobalStyles";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemonName" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
