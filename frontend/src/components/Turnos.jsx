import React, { useEffect, useState } from "react";
import axios from "axios";
import Fondo from "../img/fondo.jpg";

function Turnos () {
    const [paciente, setPaciente] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [person, setPerson] = useState("");
    const [limpiar, setLimpiar] = useState(false);

    useEffect(() => {
        if (limpiar) {
            limpiarCampos();
            setLimpiar(false);
        }
    }, [limpiar]);

    const limpiarCampos = () => {
        document.getElementById("sEspecialidad").value = "Seleccione una Especialidad";
        document.getElementById("sProfesion").value = "Seleccione un Profesional";
        document.getElementById("calendario").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("dni").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
    };
 
    const datosTurnos = () => {
        const selectEspecialidad = document.getElementById("sEspecialidad").value;
        const selectProfesional = document.getElementById("sProfesion").value;
        const calendar = document.getElementById("calendario").value;

        const Nombre = document.getElementById("nombre").value;
        const Apellido = document.getElementById("apellido").value;
        const Documento = document.getElementById("dni").value;
        const Email = document.getElementById("email").value;
        const Telefono = document.getElementById("telefono").value;

        if(Nombre != "" && Apellido != "" && Documento != "" && Email != "" && Telefono != "") {
            axios.post("http://localhost:5000/saveTurnos", {
                selectEspecial: selectEspecialidad,
                selectProf: selectProfesional,
                date: calendar,
    
                name: Nombre,
                lastname: Apellido,
                dni: Documento,
                email: Email,
                telefono: Telefono
            });

            alert("SU TURNO HA SIDO SOLICITADO");
            setLimpiar(true);
        }
        else {
            alert("ASEGURESE DE RELLENAR TODOS LOS CAMPOS REQUERIDOS (*)");
            setLimpiar(true);
        }
    };

    {/*const obtenerDatos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/saveVerTurnos");
            setPaciente(response.data);
            
            alert(response.data.map(item => `Nombre: ${item.Nombre}`));
        }catch (err) {
            console.error("Error al obtener los datos");
        }finally {
            setLoading(false);
        }
    };*/}

    const obtenerTurnoPorNombre = async (nombre) => {
        try {
            const response = await axios.get(`http://localhost:5000/getTurno/${nombre}`);
            const turno = response.data;

            if (turno.Nombre != "") {
                alert(`Turno encontrado:
                Nombre: ${turno.Nombre}
                Apellido: ${turno.Apellido}
                Documento: ${turno.Documento}
                Email: ${turno.Email}
                Teléfono: ${turno.Telefono}
                Especialidad: ${turno.Especialidad}
                Profesional: ${turno.Profesional}
                Horario: ${new Date(turno.Horario).toLocaleString()}`);

                setPaciente(turno);
                setLimpiar(true);
            }
        } catch (error) {
            alert("[ERROR 404]: SI DESEA CONOCER SU TURNO INGRESE SU NOMBRE EN EL CAMPO 'Nombre'");
            setLimpiar(true);
        }
    };

    const actualizarTurno = async () => {
        const selectEspecialidad = document.getElementById("sEspecialidad").value;
        const selectProfesional = document.getElementById("sProfesion").value;
        const calendar = document.getElementById("calendario").value;

        const Nombre = document.getElementById("nombre").value;
        const Apellido = document.getElementById("apellido").value;
        const Documento = document.getElementById("dni").value;
        const Email = document.getElementById("email").value;
        const Telefono = document.getElementById("telefono").value;

        try {
            if(Nombre != "" && Apellido != "" && Documento != "" && Email != "" && Telefono != "" && selectEspecialidad != "Seleccione una Especialidad" && selectProfesional != "Seleccione un Profesional" && calendar != "") {
                const response = await axios.put(`http://localhost:5000/updateTurno/${Nombre}`, {
                    selectEspecial: selectEspecialidad,
                    selectProf: selectProfesional,
                    date: calendar,
                    name: Nombre,
                    lastname: Apellido,
                    dni: Documento,
                    email: Email,
                    telefono: Telefono
                });
    
                alert("SU TURNO SE HA ACTUALIZADO CORRECTAMENTE");
                alert("UTILICE EL BOTON 'VER TURNO' PARA VERIFICAR EL CAMBIO");
    
                setPaciente(response.data);
                setLimpiar(true);
            }
        } catch (error) {
            alert("POR FAVOR ASEGURESE DE RELLENAR TODOS LOS CAMPOS REQUERIDOS PARA REALIZAR LA MODIFICACION DE SU TURNO");
            setLimpiar(true);
        }
    };

    return (
        <>
            <div className="divTurnos">
                <h2>Turnos</h2>

                <div className="divForms">
                    <h3 className="h3_f1">Informacion del Turno</h3>

                    <form className="f1">
                        <select id="sEspecialidad" className="f1_s1" required>
                            <option value selected>Seleccione una Especialidad</option>
                            <option >Cardiologo</option>
                            <option >Odontologo</option>
                            <option >Pediatra</option>
                        </select>

                        <select id="sProfesion" className="f1_s2" required>
                            <option value selected>Seleccione un Profesional</option>
                            <option>Diego Navarro</option>
                            <option>Walter Salazar</option>
                            <option>Jorge Lamberti</option>
                        </select>

                        <input id="calendario" className="f1_input" type="date" required/>
                    </form>

                    <h3 className="h3_f2">Informacion del Paciente</h3>

                    <form className="f2" required>
                        <input id="nombre" className="f2_input f2_ip1" type="text" placeholder="Nombre*" required/>
                        <input id="apellido" className="f2_input f2_ip2" type="text" placeholder="Apellido*" required/>
                        <input id="dni" className="f2_input f2_ip3" type="text" placeholder="DNI*" required/>
                        <input id="email" className="f2_input f2_ip4" type="email" placeholder="Email*" required/>
                        <input id="telefono" className="f2_input f2_ip5" type="text" placeholder="Telefono*" required/>
                    </form>

                    <button className="btnTurno" type="submit" onClick={datosTurnos}>Solicitar Turno</button>

                    {/*<button className="btnVerTurno" type="submit" onClick={obtenerDatos}>{loading ? "Cargando...":"Obtener Datos"}</button>*/}

                    <button className="btnVerTurno" type="submit" onClick={() => obtenerTurnoPorNombre(document.getElementById("nombre").value)}>Ver Turno</button>

                    <button className="btnActuTurno" type="submit" onClick={actualizarTurno}>Modificar Turno</button>
                </div>

            </div>
            <img className="imgTurnos" src={Fondo}/>
        </>
    )
}

export default Turnos;