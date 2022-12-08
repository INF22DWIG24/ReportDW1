'use strict';

var utils = require('../utils/writer.js');
var Aluno = require('../service/AlunoService');

module.exports.createAluno = function createAluno (req, res, next, body) {
  Aluno.createAluno(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAluno = function deleteAluno (req, res, next, id) {
  Aluno.deleteAluno(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAluno = function retrieveAluno (req, res, next, id) {
  Aluno.retrieveAluno(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAlunos = function retrieveAlunos (req, res, next) {
  Aluno.retrieveAlunos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAluno = function updateAluno (req, res, next, body, id) {
  Aluno.updateAluno(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
