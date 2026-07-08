// Importa la librería mariadb
const mariadb = require("mariadb");

// Cambiar el usuario y la contraseña según la configuración local de MariaDB.

// Crea el pool de conexiones
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "1078266148", // Escribe aquí tu contraseña si tu usuario root tiene una
    database: "loginapi",
    connectionLimit: 5
});

// Exporta el pool para usarlo en otros archivos
module.exports = pool;