import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/inicio/Inicio";
import { Lista } from "./pages/lista/Lista";
import { Detalle } from "./pages/detalle/Detalle";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Lista />} />
        <Route path="/servicios/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
