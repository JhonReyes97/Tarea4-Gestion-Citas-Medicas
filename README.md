
# Tarea 4 - Almacenamiento y consultas de datos en Big Data

## Sistema de gestión de citas médicas con MongoDB

**Estudiante:** Jhon Reyes  
**Curso:** Big Data  
**Director de curso:** Ing. Fidias Barros

## 1. Descripción del proyecto

Este proyecto consiste en el diseño e implementación de una base de datos NoSQL utilizando MongoDB para administrar la información de pacientes, médicos, especialidades y citas médicas.

## 2. Objetivo

Aplicar los conceptos de bases de datos NoSQL mediante la creación de colecciones, inserción de documentos, operaciones CRUD, consultas, relaciones entre colecciones y agregaciones.

## 3. Tecnologías utilizadas

- MongoDB
- Mongo Shell (mongosh)
- Ubuntu Server
- GitHub

## 4. Diseño de la base de datos

La base de datos se llama `gestion_citas_medicas` y contiene cuatro colecciones:

| Colección | Documentos |
|---|---:|
| especialidades | 4 |
| medicos | 4 |
| pacientes | 85 |
| citas | 7 |
| **Total** | **100** |

## 5. Operaciones implementadas

- Inserción de documentos.
- Consultas con find().
- Actualización y eliminación de registros.
- Consultas con filtros por estado y fecha.
- Relaciones entre colecciones mediante $lookup.
- Agregaciones con $group, $sum y $avg.
- Índice único para el documento del paciente.

## 6. Resultados

Se verificaron 100 documentos distribuidos en las cuatro colecciones. También se realizaron consultas para relacionar pacientes, médicos y especialidades, así como cálculos de cantidad de citas, duración total y promedios por médico.

## 7. Código fuente

El código de las consultas se encuentra en:

[consultas_mongodb.js](./consultas_mongodb.js)

## 8. Autor

Jhon Reyes  
Actividad académica - Tarea 4 de Big Data
