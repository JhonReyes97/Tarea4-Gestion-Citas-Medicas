
// TAREA 4 - BIG DATA
// Sistema de gestion de citas medicas con MongoDB
// Base de datos: gestion_citas_medicas

use("gestion_citas_medicas");

// 1. Verificar colecciones y cantidad de documentos
db.getCollectionNames().forEach(nombre => {
  print(nombre + ": " + db.getCollection(nombre).countDocuments());
});

// 2. Consultar pacientes
db.pacientes.find().limit(10);

// 3. Consultar medicos activos
db.medicos.find({ activo: true });

// 4. Consultar citas programadas
db.citas.find({ estado: "Programada" });

// 5. Consultar citas por fecha
db.citas.find({
  fecha: ISODate("2026-11-18T00:00:00Z")
});

// 6. Relacionar medicos con especialidades
db.medicos.aggregate([
  {
    $lookup: {
      from: "especialidades",
      localField: "especialidad_id",
      foreignField: "_id",
      as: "especialidad"
    }
  },
  { $unwind: "$especialidad" },
  {
    $project: {
      _id: 0,
      medico: "$nombre",
      registro_profesional: 1,
      especialidad: "$especialidad.nombre",
      activo: 1
    }
  }
]);

// 7. Relacionar citas, pacientes, medicos y especialidades
db.citas.aggregate([
  {
    $lookup: {
      from: "pacientes",
      localField: "paciente_id",
      foreignField: "_id",
      as: "paciente"
    }
  },
  { $unwind: "$paciente" },
  {
    $lookup: {
      from: "medicos",
      localField: "medico_id",
      foreignField: "_id",
      as: "medico"
    }
  },
  { $unwind: "$medico" },
  {
    $lookup: {
      from: "especialidades",
      localField: "medico.especialidad_id",
      foreignField: "_id",
      as: "especialidad"
    }
  },
  { $unwind: "$especialidad" },
  {
    $project: {
      _id: 0,
      paciente: "$paciente.nombre",
      medico: "$medico.nombre",
      especialidad: "$especialidad.nombre",
      fecha: 1,
      hora: 1,
      estado: 1
    }
  }
]);

// 8. Contar citas por estado
db.citas.aggregate([
  {
    $group: {
      _id: "$estado",
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } }
]);

// 9. Sumar la duracion de las citas
db.citas.aggregate([
  {
    $group: {
      _id: null,
      total_citas: { $sum: 1 },
      total_minutos: { $sum: "$duracion_minutos" }
    }
  }
]);

// 10. Calcular promedio de duracion por medico
db.citas.aggregate([
  {
    $group: {
      _id: "$medico_id",
      promedio_minutos: { $avg: "$duracion_minutos" },
      total_citas: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "medicos",
      localField: "_id",
      foreignField: "_id",
      as: "medico"
    }
  },
  { $unwind: "$medico" },
  {
    $project: {
      _id: 0,
      medico: "$medico.nombre",
      promedio_minutos: 1,
      total_citas: 1
    }
  }
]);

// 11. Crear indice unico para documento del paciente
db.pacientes.createIndex(
  { documento: 1 },
  { unique: true }
);

// 12. Consultar indices
db.pacientes.getIndexes();
