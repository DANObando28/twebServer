const mongoose = require('mongoose');

var incidentsSchema = new mongoose.Schema({
    idIncidente:{
        type: String
    },
    nivelImpacto: {
        type: String
    },
    idEmpleado: {
        type: String
    },
    idInvestigador: {
        type: String
    },
    descripcion: {
        type: String
   },
   fechaInicio: {
       type: String

   },
   fechaFinal: {
        type: String
   },
   estado: {
        type: String
   }
});

mongoose.model('Incidents', incidentsSchema);




