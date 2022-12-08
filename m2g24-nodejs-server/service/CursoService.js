'use strict';


/**
 * Create Curso
 *
 * body Curso  (optional)
 * returns Curso
 **/
exports.createCurso = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome",
  "nrAnos" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create disciplina by curso
 *
 * body Curso  (optional)
 * id Long 
 * returns Curso
 **/
exports.createdisciplina by curso = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome",
  "nrAnos" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Curso
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteCurso = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve curso
 *
 * id Long 
 * returns Curso
 **/
exports.retrieveCurso = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome",
  "nrAnos" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Curso
 *
 * returns List
 **/
exports.retrieveCursos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome" : "nome",
  "nrAnos" : 0
}, {
  "nome" : "nome",
  "nrAnos" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Curso
 *
 * body Curso 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateCurso = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

