Evidencia: GA7-220501096-AA5-EV01
Aprendiz: Harold José López Montealegre

Repositorio GitHub:
https://github.com/TU_USUARIO/LoginAPI

Instrucciones para ejecutar el proyecto:

1. Clonar el repositorio o descargar el proyecto.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir una terminal en la carpeta del proyecto.
4. Ejecutar el siguiente comando para instalar las dependencias:

npm install

5. Crear la base de datos "loginapi" en MariaDB.

6. Ejecutar el siguiente script SQL:

CREATE DATABASE loginapi;

USE loginapi;

CREATE TABLE usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50),
    password VARCHAR(100)
);

7. Verificar la configuración de la conexión a la base de datos en el archivo:

database/config.js

Modificar el usuario o la contraseña de MariaDB si es necesario.

8. Iniciar el servidor con el comando:

node app.js

9. El servidor quedará disponible en:

http://localhost:3000

Servicios disponibles:

POST /api/registro
POST /api/login