'use strict';


/**
 * Create disciplina
 *
 * body Disciplina  (optional)
 * returns Disciplina
 **/
exports.createdisciplina = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ano" : 2000,
  "curso_id" : 0,
  "nome" : "nome",
  "professor_id" : 0,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Disciplina
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteDisciplina = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve disciplina alunos
 *
 * id Long 
 * returns List
 **/
exports.retrieveCursoAlunos = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ano" : 2000,
  "curso_id" : 0,
  "nome" : "nome",
  "professor_id" : 0,
  "id" : 0
}, {
  "ano" : 2000,
  "curso_id" : 0,
  "nome" : "nome",
  "professor_id" : 0,
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve disciplina
 *
 * id Long 
 * returns Disciplina
 **/
exports.retrieveDisciplina = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ano" : 2000,
  "curso_id" : 0,
  "nome" : "nome",
  "professor_id" : 0,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all disciplinas
 *
 * returns List
 **/
exports.retrieveDisciplinas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ano" : 2000,
  "curso_id" : 0,
  "nome" : "nome",
  "professor_id" : 0,
  "id" : 0
}, {
  "ano" : 2000,
  "curso_id" : 0,
  "nome" : "nome",
  "professor_id" : 0,
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Disciplina
 *
 * body Disciplina 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateDisciplina = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

