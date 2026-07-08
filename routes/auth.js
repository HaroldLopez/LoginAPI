// Importa Express
const express = require("express");

// Crea el enrutador
const router = express.Router();

// Importa la conexión a la base de datos
const pool = require("../database/config");


// ==========================
// REGISTRO
// ==========================
router.post("/registro", async (req, res) => {

    const { usuario, password } = req.body;

    try {

        const conn = await pool.getConnection();

        await conn.query(
            "INSERT INTO usuarios(usuario,password) VALUES (?,?)",
            [usuario, password]
        );

        conn.release();

        res.json({
            mensaje: "Usuario registrado correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error al registrar usuario"
        });

    }

});


// ==========================
// LOGIN
// ==========================
router.post("/login", async (req, res) => {

    const { usuario, password } = req.body;

    try {

        const conn = await pool.getConnection();

        const resultado = await conn.query(

            "SELECT * FROM usuarios WHERE usuario=? AND password=?",

            [usuario, password]

        );

        conn.release();

        if (resultado.length > 0) {

            res.json({

                mensaje: "Autenticación satisfactoria"

            });

        } else {

            res.status(401).json({

                mensaje: "Error en la autenticación"

            });

        }

    } catch (error) {

        console.log(error);

        res.status(500).json({

            mensaje: "Error del servidor"

        });

    }

});

module.exports = router;