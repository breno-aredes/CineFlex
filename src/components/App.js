import Home from "../pages/home";
import Header from "./Header";
import GlobalStyle from "../style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seats from "../pages/assentos";
import Sessions from "../pages/sessoes";
import Success from "../pages/Sucesso";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idMovie" element={<Sessions />} />
        <Route path="/assentos/:idSession/" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
