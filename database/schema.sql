DROP DATABASE IF EXISTS photosdb;

CREATE DATABASE photosdb;

USE photosdb;

CREATE TABLE photos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  propertyID INT,
  url TEXT,
  description TEXT
);

DESCRIBE photos;
