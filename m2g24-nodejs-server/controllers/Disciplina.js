'use strict';

var utils = require('../utils/writer.js');
var Disciplina = require('../service/DisciplinaService');

module.exports.createdisciplina = function createdisciplina (req, res, next, body) {
  Disciplina.createdisciplina(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDisciplina = function deleteDisciplina (req, res, next, id) {
  Disciplina.deleteDisciplina(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveDisciplinaAlunos = function retrieveDisciplinaAlunos (req, res, next, id) {
  Disciplina.retrieveDisciplinaAlunos(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveDisciplina = function retrieveDisciplina (req, res, next, id) {
  Disciplina.retrieveDisciplina(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveDisciplinas = function retrieveDisciplinas (req, res, next) {
  Disciplina.retrieveDisciplinas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDisciplina = function updateDisciplina (req, res, next, body, id) {
  Disciplina.updateDisciplina(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
