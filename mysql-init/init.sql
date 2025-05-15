SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

CREATE DATABASE IF NOT EXISTS db_test 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE db_test;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT IGNORE INTO users (email, password)
VALUES (
  'mario@example.com',
  '$2b$10$E9HQbCHfQK4D7ynXdw6JxOsZdXfBLZgiU7pWDyfnlUUXzWPHkmkqK'
);
CREATE TABLE IF NOT EXISTS films (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  director VARCHAR(255),
  release_year INT,
  genre VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
INSERT INTO films (title, director, release_year, genre)
VALUES
  ('Inception', 'Christopher Nolan', 2010, 'Science Fiction'),
  ('Le Fabuleux Destin d''Amélie Poulain', 'Jean-Pierre Jeunet', 2001, 'Comédie romantique'),
  ('Parasite', 'Bong Joon-ho', 2019, 'Thriller'),
  ('Interstellar', 'Christopher Nolan', 2014, 'Science Fiction'),
  ('La La Land', 'Damien Chazelle', 2016, 'Comédie musicale'),
  ('Le Seigneur des Anneaux : La Communauté de l''Anneau', 'Peter Jackson', 2001, 'Fantasy'),
  ('Forrest Gump', 'Robert Zemeckis', 1994, 'Drame'),
  ('The Dark Knight', 'Christopher Nolan', 2008, 'Action'),
  ('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime'),
  ('Intouchables', 'Olivier Nakache & Éric Toledano', 2011, 'Comédie dramatique');


CREATE TABLE IF NOT EXISTS recipes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  ingredients TEXT,
  steps TEXT,
  image_url VARCHAR(255),
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO recipes (title, description, ingredients, steps, image_url, user_id)
VALUES (
  'Spaghetti Carbonara',
  'Un classique italien avec une sauce crémeuse aux œufs et au fromage.',
  '- 200g de spaghetti\n- 100g de pancetta\n- 2 œufs\n- 50g de parmesan râpé\n- Sel, poivre',
  '1. Cuire les spaghetti.\n2. Faire revenir la pancetta.\n3. Battre les œufs avec le parmesan.\n4. Mélanger le tout hors du feu.\n5. Saler, poivrer, servir chaud.',
  'https://images.unsplash.com/photo-1651585594107-859f80b4ca3a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  1 -- ID de l'utilisateur qui crée la recette
);
