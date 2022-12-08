'use strict';

var utils = require('../utils/writer.js');
var Professor = require('../service/ProfessorService');

module.exports.createProfessor = function createProfessor (req, res, next, body) {
  Professor.createProfessor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProfessor = function deleteProfessor (req, res, next, id) {
  Professor.deleteProfessor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveProfessor = function retrieveProfessor (req, res, next, id) {
  Professor.retrieveProfessor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveProfessores = function retrieveProfessores (req, res, next) {
  Professor.retrieveProfessores()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProfessor = function updateProfessor (req, res, next, body, id) {
  Professor.updateProfessor(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
