import React from "react";
import axios from "axios";

import Ubicacion from "../img/ubicacion.png";
import  Email from "../img/email.png";
import  Telefono from "../img/celular.png";
import  Whatsapp from "../img/whatsapp.png";
import Fondo from "../img/fondo.jpg";

function Contacto() {
    const datosContactos = () => {
        const Nombre = document.getElementById("nombre").value;
        const Apellido = document.getElementById("apellido").value;
        const Email = document.getElementById("email").value;
        const Mensaje = document.getElementById("msn").value;

        if(Nombre != "" && Apellido != "" && Email != "" && Mensaje != "") {
            
            axios.post("http://localhost:5000/saveContactos", {
                name: Nombre,
                lastname: Apellido,
                email: Email,
                msn: Mensaje
            });

            alert("SU CONSULTA HA SIDO ENVIADA CON EXITO");
           // alert("SE LE CONTACTARA EN LA BREVEDAD POR SU CORREO");
        } 
        else {
            alert("ES OBGLIGATORIO RELLENAR TODOS LOS CAMPOS REQUERIDOS (*)");
        }
    }

    return ( 
    <>
        <div className="divContainer">
            <h2 className="h2Main">Contacto</h2>

            <div className="divContacto">
                <img className="imgContacto imgUbicacion" src={Ubicacion} alt="" />
                <h2 className="h2Contacto h2Ubicacion">Direccion:</h2>
                <p className="pContacto pUbicacion">Alem 595, San Miguel de Tucuman</p>

                <img className="imgContacto imgEmail" src={Email} alt="" />
                <h2 className="h2Contacto h2Email">Email:</h2>
                <p className="pContacto pEmail">joa03jara@gmail.com</p>

                <img className="imgContacto imgTelefono" src={Telefono} alt="" />
                <h2 className="h2Contacto h2Telefono">Telefono:</h2>
                <p className="pContacto pTelefono">381-4234820</p>

                <img className="imgContacto imgWhatsapp" src={Whatsapp} alt="" />
                <h2 className="h2Contacto h2Whatsapp">Whatsapp:</h2>
                <p className="pContacto pWhatsapp">3873-338639</p>
            </div>

            <form className="formContacto">
                <input id="nombre" className="Nombre" type="text" placeholder="Nombre*" required/>
                <input  id="apellido" className="Apellido" type="text" placeholder="Apellido*" required/>
                <input id="email" className="Email" type="email" placeholder="Email*" required/>
                <textarea id="msn" placeholder="Mensaje*" required></textarea>
                <button className="enter-search" type="submit" onClick={datosContactos}>Enviar Mensaje</button>
            </form>
        </div>
        <img className="imgFondoContacto" src={Fondo}/>
    </>
    )
}

export default Contacto;