import React from "react";
import axios from "axios";
import style from "../css/style.css"
import Fondo from "../img/fondo.jpg"

function Especialidades () {
    return (
        <>
            <div className="divEspecialidades">
                <h2>Especialidades</h2>

                <div className="divM1">Cardiologia</div>
                <div className="divM2">Odontologia</div>
                <div className="divM3">Pediatria</div>
            </div>
            <img className="imgEspecialidades" src={Fondo}/>
        </>
    )
}

export default Especialidades;