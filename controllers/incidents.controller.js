const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Incidents = mongoose.model('Incidents');

module.exports.register = (req, res, next) => {
    var incidents = new Incidents();
    incidents.idIncidente = req.body.idIncidente;
    incidents.nivelImpacto = req.body.nivelImpacto;
    incidents.idEmpleado = req.body.idEmpleado;
    incidents.idInvestigador = req.body.idInvestigador;
    incidents.descripcion = req.body.descripcion;
    incidents.fechaInicio = req.body.fechaInicio;
    incidents.fechaFinal = req.body.fechaFinal;
    incidents.estado = req.body.estado;

    incidents.save((err, doc) => {
        if (!err)
            res.send(doc);
    });
}

module.exports.listincident = (req, res, next) => {
    Incidents.find(function(err, doc) {
        //Si hay un error, lo regresamos
        if (err){
          res.send(err);
        }
        //Si no hay errores, regresamos los registros
        res.send(doc);
    });
    }
