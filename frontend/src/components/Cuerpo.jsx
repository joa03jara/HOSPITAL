import React from "react";
import axios from "axios";
import Fondo from "../img/fondo.jpg";
import style from "../css/style.css";

function Cuerpo () {

    return (
        <>
            <div className="divCuerpo">
                <h3 className="h3Cuerpo">Bienvenidos</h3>
                <h1 className="h1Cuerpo">MEDICAL  NORTE  TUCUMAN</h1>
            </div>
            {/*<img className="imgCuerpo" src={Fondo} alt="" />*/}
        </>
    )
}

export default Cuerpo;