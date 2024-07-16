import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Secciones from "./components/Secciones";
import Cuerpo from "./components/Cuerpo";
import Especialidades from "./components/Especialidades";
import Contacto from "./components/Contacto";
import PiePagina from "./components/Footer";
import Turnos from "./components/Turnos";

let vacio = "";

function Main () {
    return (
        <>
            <Router>
                <Secciones/>
                <Routes>
                    <Route path="/cuerpo" element={<Cuerpo />}></Route>
                    <Route path="/especialidades" element={<Especialidades />}></Route>
                    <Route path="/turnos" element={<Turnos />}></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                </Routes>
                <PiePagina/>
            </Router>
        </>
    )
}

export default Main;