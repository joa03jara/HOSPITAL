const mongoose = require ("mongoose");
const express = require ("express");
const axios = require("axios");
const cors = require("cors"); // OBLIGATORIO INSTALARLO
require ("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

//conexion con MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then (() => console.log ("Conexion Exitosa"))
    .catch (err => console.log (err)
);

//esquema de Contactos
const schemaContactos  = mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Email: String,
    Mensaje: String
});
const datosContactos = mongoose.model ("esquemaContactos", schemaContactos);

//esquema de Turnos
const schemaTurnos  = mongoose.Schema({
    Especialidad: String,
    Profesional: String,
    Horario: Date,
    Nombre: String,
    Apellido: String,
    Documento: Number,
    Email: String,
    Telefono: Number
});
const datosTurnos = mongoose.model ("esquemaTurnos", schemaTurnos);

//envios de datos
app.post("/saveContactos", (req,res) => {
    const DatosContactos = datosContactos({
        Nombre: req.body.name, 
        Apellido: req.body.lastname, 
        Email: req.body.email, 
        Mensaje: req.body.msn
    })
    DatosContactos
        .save()
        .then(() => res.json({message: "se guardo bien"}))
        .catch((error) => res.json({message: error})
    );
});

//enviar datos turno
app.post("/saveTurnos", (req,res) => {
    const DatosTurnos = datosTurnos({
        Especialidad: req.body.selectEspecial, 
        Profesional: req.body.selectProf, 
        Horario: req.body.date ,
        Nombre: req.body.name, 
        Apellido: req.body.lastname, 
        Documento: req.body.dni, 
        Email: req.body.email, 
        Telefono: req.body.telefono})
    
    DatosTurnos
        .save()
        .then(() => res.json({message: "se guardo bien"}))
        .catch((error) => res.json({message: error})
    );
});

//recibir datos del paciente
/*app.get("/saveVerTurnos", async(req, res) => {
    try {
        const dataPaciente = await datosTurnos.find();
        res.json(dataPaciente);
    } catch(error) {
        res.status(500).send(error);
    }
});*/

// recibir datos segun el nombre del paciente
app.get("/getTurno/:nombre", async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const turno = await datosTurnos.findOne({ Nombre: nombre });

        if (turno) {
            res.json(turno);
        } else {
            res.status(404).json({ message: "Turno no encontrado" });
        }

    } catch (error) {
        res.status(500).send(error);
    }
});

// actualizar datos del paciente según su nombre
app.put("/updateTurno/:nombre", async (req, res) => {
    try {
        const nombre = req.params.nombre;

        const updateData = {
            Especialidad: req.body.selectEspecial,
            Profesional: req.body.selectProf,
            Horario: req.body.date,
            Nombre: req.body.name,
            Apellido: req.body.lastname,
            Documento: req.body.dni,
            Email: req.body.email,
            Telefono: req.body.telefono
        };

        const turnoActualizado = await datosTurnos.findOneAndUpdate({ Nombre: nombre }, updateData, {new: true});

        if (turnoActualizado) {
            res.json(turnoActualizado);
        } else {
            res.status(404).json({ message: "Turno no encontrado" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen (port, () => {
    console.log ("Servidor escuchando en el puerto "+ port);
})