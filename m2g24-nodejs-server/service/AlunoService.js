'use strict';


/**
 * Create Aluno
 *
 * body Aluno  (optional)
 * returns Aluno
 **/
exports.createAluno = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome",
  "disciplina_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Aluno
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteAluno = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Aluno
 *
 * id Long 
 * returns Aluno
 **/
exports.retrieveAluno = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome",
  "disciplina_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Alunos
 *
 * returns List
 **/
exports.retrieveAlunos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome" : "nome",
  "disciplina_id" : 0
}, {
  "nome" : "nome",
  "disciplina_id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Aluno
 *
 * body Aluno 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateAluno = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

