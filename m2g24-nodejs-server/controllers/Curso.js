'use strict';

var utils = require('../utils/writer.js');
var Curso = require('../service/CursoService');

module.exports.createCurso = function createCurso (req, res, next, body) {
  Curso.createCurso(body)
    .then(Curso.createCurso)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createdisciplina_by_curso = function createdisciplina_by_curso (req, res, next, body, id) {
  Curso.createdisciplina_by_curso(body, id)
    .then(Curso.createdisciplina_by_curso)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCurso = function deleteCurso (req, res, next, id) {
  Curso.deleteCurso(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCurso = function retrieveCurso (req, res, next, id) {
  Curso.retrieveCurso(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCursos = function retrieveCursos (req, res, next) {
  Curso.retrieveCursos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCurso = function updateCurso (req, res, next, body, id) {
  Curso.updateCurso(body, id)
    .then(Curso.updateCurso)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
