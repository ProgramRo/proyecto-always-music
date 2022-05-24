-- Creación Base de Datos
CREATE DATABASE estudiantes_db;
-- Creación de tabla
CREATE TABLE estudiantes(nombre VARCHAR(50) NOT NULL, rut VARCHAR(12) PRIMARY KEY NOT NULL, curso VARCHAR(50) NOT NULL, nivel SMALLINT NOT NULL);