-- DATABASE AND TABLE CREATION QUERIES

CREATE DATABASE user_management_api;
USE user_management_api;

CREATE TABLE users (id INT PRIMARY KEY AUTO_INCREMENT, usernames VARCHAR(250) UNIQUE, email VARCHAR(250) UNIQUE, password VARCHAR(200));