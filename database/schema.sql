DELETE photosdb;

CREATE DATABASE photosdb;

USE photosdb;

CREATE TABLE photos (
  id INT AUTO_INCREMENT,
  url TEXT,
  description TEXT
);
