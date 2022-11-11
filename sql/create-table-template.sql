-- Active: 1668004665642@@fabiansport.com@3306@fabiansport_swapi
CREATE TABLE starships(  
     id INT NOT NULL AUTO_INCREMENT COMMENT 'primary key',
     name VARCHAR(150) NOT NULL COMMENT 'nombre de la nave',
     model VARCHAR(150) NOT NULL COMMENT 'modelo de la nave',
     manufacturer VARCHAR(150) NOT NULL COMMENT 'manufacturer de la nave',
     cost_in_credits VARCHAR(10) NOT NULL COMMENT 'costo en creditos',
     length VARCHAR(10) NOT NULL COMMENT 'recorrido de la nave',
     max_atmosphering_speed VARCHAR(10) NOT NULL COMMENT 'maxima velocidad',
     crew VARCHAR(10) NOT NULL COMMENT 'creditos',
     passengers VARCHAR(10) NOT NULL COMMENT 'pasajeros',
     cargo_capacity VARCHAR(10) NOT NULL COMMENT 'capacidad de carga',
     consumables VARCHAR(10) NOT NULL COMMENT 'consumible',
     hyperdrive_rating VARCHAR(10) NOT NULL COMMENT 'hyperdrive_rating',
     MGLT VARCHAR(10) NOT NULL COMMENT 'MGLT',
     starship_class VARCHAR(150) NOT NULL COMMENT 'starship_class',
     pilots VARCHAR(250) NOT NULL COMMENT 'pilotos',
     films VARCHAR(250) NOT NULL COMMENT 'peliculas',
     created_at TIMESTAMP DEFAULT now() NOT NULL,
     updated_at TIMESTAMP DEFAULT now(),
     CONSTRAINT starships_id PRIMARY KEY (id),
     CONSTRAINT starships_id_name UNIQUE (name)
) ENGINE = InnoDB COMMENT 'tabla de naves estelares';
