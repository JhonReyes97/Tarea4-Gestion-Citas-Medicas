
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

## 10. Evidencias de la implementación

Las evidencias del desarrollo práctico se encuentran organizadas en la carpeta `evidencias` del repositorio.

| N.º | Evidencia | Archivo |
|---|---|---|
| 1 | Registro de citas | [Ver evidencia 01](evidencias/Evidencia_01_Registro_de_citas.png) |
| 2 | Consultas y relaciones | [Ver evidencia 02](evidencias/Evidencia_02_Consultas_y_relaciones.png) |
| 3 | Operación CRUD: insertar | [Ver evidencia 03](evidencias/Evidencia_03_Operaciones_CRUD_insertar.png) |
| 4 | Operación CRUD: actualizar | [Ver evidencia 04](evidencias/Evidencia_04_Operaciones_CRUD_actualizar.png) |
| 5 | Operación CRUD: eliminar | [Ver evidencia 05](evidencias/Evidencia_05_Operaciones_CRUD_eliminar.png) |
| 6 | Índice único y validación | [Ver evidencia 06](evidencias/Evidencia_06_Indice_unico_y_validacion.png) |
| 7 | Consultas y resultados | [Ver evidencia 07](evidencias/Evidencia_07_Consultas_y_resultados.png) |

También se incluye el aporte individual en formato Word: [Aporte individual](evidencias/Aporte_individual_Tarea4.docx).

## 11. Repositorio de código

El código de las consultas MongoDB y el modelo de datos se encuentran disponibles en este repositorio.
