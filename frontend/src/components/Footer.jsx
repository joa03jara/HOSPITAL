import React from "react";
import axios from "axios";
import Fondo from "../img/fondo.jpg";

function PiePagina () {
    return (
        <>
            <div className="divFooter">
                {/* <h3>Integrantes:</h3>
                <p>Pablo Cabrera</p>
                <p>Jara Joaquin</p>
                <p> Ricardo Savino?</p> */}
                <p className="pFooter">© Copyright Medical Norte Tucuman. Todos los derechos reservados.</p>
            </div>
            <img className="imgFooter" src={Fondo}/>
        </>
    )
}

export default PiePagina;