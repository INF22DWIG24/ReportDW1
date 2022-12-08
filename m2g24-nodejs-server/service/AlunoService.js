'use strict';
var sql = require('../utils/db.js');

/**
 * Create Aluno
 *
 * body Aluno  (optional)
 * returns Aluno
 **/
exports.createAluno = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    resolver();
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
    resolve();
  });
}


/**
 * Retrieve Alunos
 *
 * returns List
 **/
exports.retrieveAlunos = function() {
  return new Promise(function(resolve, reject) {
    resolve()
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

