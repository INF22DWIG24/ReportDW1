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
    sql.query("INSERT INTO aluno (nome, n_aluno, disciplina_id) values (?, ?)", [body.nome, body.n_aluno, body.disciplina_id], function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res.insertID);
        resolve (res.insertID);
      }
    });
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
    sql.query("DELETE FROM aluno where id = ?", [id], function(err, res) {
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else{
        console.log(res);
        resolve({"deleted":id});
      }
    });
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
    sql.query("SELECT * FROM aluno WHERE id = ?", [id], function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


/**
 * Retrieve Alunos
 *
 * returns List
 **/
exports.retrieveAlunos = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM aluno", function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
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
    console.log(body);
    sql.query("UPDATE aluno set nome = ?, disciplina_id = ? where id = ?", [body.nome, body.disciplina_id, id], function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(id);
      }
    });
  });
}

