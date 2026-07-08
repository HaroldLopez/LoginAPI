// Importa Express
const express = require("express");

// Importa CORS
const cors = require("cors");

// Crea la aplicación
const app = express();

// Permite recibir datos JSON
app.use(express.json());

// Habilita CORS
app.use(cors());

// Importa las rutas
const authRoutes = require("./routes/auth");

// Usa las rutas
app.use("/api", authRoutes);

// Puerto del servidor
const PORT = 3000;

// Inicia el servidor
app.listen(PORT, () => {

    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

});