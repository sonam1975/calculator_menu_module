DROP DATABASE IF EXISTS MortgageCalculator;

CREATE DATABASE MortgageCalculator;

USE MortgageCalculator;

CREATE TABLE states (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE mortgages (
  mortgageId INT NOT NULL AUTO_INCREMENT,
  stateId INT NOT NULL,
  mortgageType ENUM('F15', 'F30', 'ARM51') NOT NULL,
  PRIMARY KEY(mortgageId)
);

CREATE TABLE homes (
  id INT NOT NULL AUTO_INCREMENT,
  stateId INT NOT NULL,
  housePrice INT NOT NULL,
  monthlyHOA INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(stateId) REFERENCES states(id)
);

CREATE TABLE taxes (
  taxId INT NOT NULL AUTO_INCREMENT,
  stateId INT NOT NULL,
  statePropTax FLOAT NOT NULL,
  PRIMARY KEY(taxId),
  FOREIGN KEY(stateId) REFERENCES states(id)
);

CREATE TABLE insurance (
  insuranceId INT NOT NULL AUTO_INCREMENT,
  stateId INT NOT NULL,
  insuranceRate FLOAT NOT NULL,
  PRIMARY KEY(insuranceId),
  FOREIGN KEY(stateId) REFERENCES states(id)
);

CREATE TABLE bankRates (
  bankRateId INT NOT NULL AUTO_INCREMENT,
  bankName VARCHAR(100) NOT NULL,
  bankRate FLOAT NOT NULL,
  PRIMARY KEY(bankRateId)
);