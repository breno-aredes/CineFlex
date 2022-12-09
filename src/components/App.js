import Home from "../pages/home";
import Header from "./header";
import GlobalStyle from "../style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seats from "../pages/assentos";
import Sessions from "../pages/sessoes";
import Success from "../pages/Sucesso";
import { useState } from "react";

function App() {
  const [dataSuccess, setDataSuccess] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idMovie" element={<Sessions />} />
        <Route
          path="/assentos/:idSession/"
          element={<Seats setDataSuccess={setDataSuccess} />}
        />
        <Route
          path="/sucesso"
          element={<Success dataSuccess={dataSuccess} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
