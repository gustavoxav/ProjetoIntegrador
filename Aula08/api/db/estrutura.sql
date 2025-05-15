-- ---------------------------
-- Estrutura do banco de dados
-- ---------------------------

DROP DATABASE IF EXISTS mvc;

CREATE DATABASE mvc DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE mvc;

-- ---------------------------

CREATE TABLE pais (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL UNIQUE,
    ddi CHAR(3) DEFAULT NULL
) ENGINE=INNODB;