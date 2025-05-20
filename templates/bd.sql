-- Crear el esquema
CREATE SCHEMA IF NOT EXISTS `institucion_educativa` DEFAULT CHARACTER SET utf8mb4;
USE institucion_educativa;

-- Crear tabla rol
CREATE TABLE rol (
    id_rol INT AUTO_INCREMENT,
    nombre_rol VARCHAR(50),
    PRIMARY KEY(id_rol)
);

-- Crear tabla usuario_institucion
CREATE TABLE usuario_institucion (
    dni_ins INT,
    id_rol INT NOT NULL,
    nombre_ins VARCHAR(50),
    apellido_ins VARCHAR(50),
    email_ins VARCHAR(100),
    telefono_ins INT,
    rol_ins VARCHAR(50),
    PRIMARY KEY (dni_ins),
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

-- Crear tabla usuario_familiar
CREATE TABLE usuario_familiar (
    dni_fam INT,
    dni_ins INT NOT NULL,
    nombre_fam VARCHAR(50),
    apellido_fam VARCHAR(50),
    email_fam VARCHAR(100),
    telefono_fam INT,
    password_fam VARCHAR(50),
    PRIMARY KEY(dni_fam),
    FOREIGN KEY (dni_ins) REFERENCES usuario_institucion(dni_ins)
);