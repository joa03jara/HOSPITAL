import React from "react";
import axios from "axios";
import style from "../css/style.css"
import {Link} from "react-router-dom";

import Logo from "../img/logo.png"

let vacio = "";

function Secciones () {
    return (
        <>
            <header className="header">
                <div className="logo-contenedor">
                    <img className="imgLogo" src={Logo} alt="Logo" />
                </div>

                <u className="lista-navegacion">
                    <li className="nav-item-inicio">
                        <Link className="a" to="/cuerpo">Inicio</Link>
                    </li>

                    <li className="nav-item-especialidades">
                        <Link className="a" to="/especialidades">Especialidades</Link>
                    </li>

                    <li className="nav-item-contacto">
                        <Link className="a" to="/contacto">Contacto</Link>
                    </li>

                    <li className="nav-item-turnos">
                        <Link className="btnSecciones" to="/turnos" >TURNOS</Link> 
                    </li>
                </u>
            </header>
        </>
    )
}

export default Secciones;