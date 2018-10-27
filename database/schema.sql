DROP DATABASE IF EXISTS photosdb;

CREATE DATABASE photosdb;

USE photosdb;

CREATE TABLE photos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  propertyID INT,
  url TEXT,
  description TEXT
);

CREATE TABLE properties (
  id INT AUTO_INCREMENT PRIMARY KEY
);

DESCRIBE photos;
DESCRIBE properties;