'use strict';


/**
 * Create Curso
 *
 * body Curso  (optional)
 * returns Curso
 **/
exports.createCurso = function(body) {
  return new Promise(function(resolve, reject) {
    resolve()
  });
}


/**
 * Create disciplina by curso
 *
 * body Curso  (optional)
 * id Long 
 * returns Curso
 **/
exports.createdisciplina_by_curso = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    resolve();
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
    resolve();
  });
}


/**
 * Retrieve Curso
 *
 * returns List
 **/
exports.retrieveCursos = function() {
  return new Promise(function(resolve, reject) {
    resolve()
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

