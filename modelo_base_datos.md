
# Modelo de datos - Gestión de citas médicas

## 1. Nombre de la base de datos

`gestion_citas_medicas`

## 2. Descripción

La base de datos permite administrar pacientes, médicos, especialidades y citas médicas mediante MongoDB, utilizando colecciones y documentos BSON.

## 3. Colecciones y estructura

### 3.1 Colección: especialidades

Almacena las especialidades médicas disponibles.

| Campo | Tipo de dato | Descripción |
|---|---|---|
| _id | ObjectId | Identificador único |
| nombre | String | Nombre de la especialidad |

Ejemplo:

```json
{
  "nombre": "Medicina general"
}
```

### 3.2 Colección: medicos

Almacena la información de los profesionales médicos.

| Campo | Tipo de dato | Descripción |
|---|---|---|
| _id | ObjectId | Identificador único |
| nombre | String | Nombre del médico |
| especialidad_id | ObjectId | Referencia a especialidades |
| registro_profesional | String | Registro profesional |
| activo | Boolean | Estado del médico |

### 3.3 Colección: pacientes

Almacena los datos de los pacientes.

| Campo | Tipo de dato | Descripción |
|---|---|---|
| _id | ObjectId | Identificador único |
| nombre | String | Nombre del paciente |
| documento | String | Número de identificación |
| telefono | String | Teléfono de contacto |
| correo | String | Correo electrónico |
| direccion | String | Dirección de residencia |

### 3.4 Colección: citas

Almacena la información de las citas médicas.

| Campo | Tipo de dato | Descripción |
|---|---|---|
| _id | ObjectId | Identificador único |
| paciente_id | ObjectId | Referencia al paciente |
| medico_id | ObjectId | Referencia al médico |
| fecha | Date | Fecha de la cita |
| hora | String | Hora de la cita |
| estado | String | Estado de la cita |
| duracion_minutos | Number | Duración en minutos |
| motivo | String | Motivo de la consulta |

## 4. Relaciones entre colecciones

- Cada médico se relaciona con una especialidad mediante `especialidad_id`.
- Cada cita se relaciona con un paciente mediante `paciente_id`.
- Cada cita se relaciona con un médico mediante `medico_id`.
- La especialidad de cada médico se obtiene mediante la relación con la colección `especialidades`.

## 5. Consultas y relaciones

Se implementaron operaciones de consulta y agregación mediante:

- `find()` para recuperar documentos.
- `$lookup` para relacionar colecciones.
- `$unwind` para desplegar los documentos relacionados.
- `$group` para agrupar resultados.
- `$sum` para calcular totales.
- `$avg` para calcular promedios.

## 6. Justificación del uso de MongoDB

MongoDB permite almacenar información en documentos flexibles, facilita la consulta de grandes cantidades de datos y permite relacionar colecciones mediante operaciones de agregación. Su estructura resulta apropiada para un sistema de citas médicas que puede incorporar nuevos campos y necesidades de información.

## 7. Conclusión

El diseño de la base de datos permitió organizar la información de pacientes, médicos, especialidades y citas. Las relaciones y consultas implementadas facilitaron la recuperación y el análisis de los datos del sistema.
