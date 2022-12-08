'use strict';
var sql = require('../utils/db.js');

/**
 * Create disciplina
 *
 * body Disciplina  (optional)
 * returns Disciplina
 **/
exports.createdisciplina = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO disciplina (ano, curso_id, nome, professor_id) values (?, ?, ?, ?)", [body.ano, body.curso_id, body.nome, body.professor_id], function(err, res){
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
 * Delete Disciplina
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteDisciplina = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM disciplina where id = ?", [id], function(err, res) {
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
 * Retrieve disciplina alunos
 *
 * id Long 
 * returns List
 **/
exports.retrieveDisciplinaAlunos = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM aluno WHERE disciplina_id = ?", [id], function(err, res){
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
 * Retrieve disciplina
 *
 * id Long 
 * returns Disciplina
 **/
exports.retrieveDisciplina = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM disciplina WHERE id = ?", [id], function(err, res){
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
 * Retrieve all disciplinas
 *
 * returns List
 **/
exports.retrieveDisciplinas = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM disciplina", function(err, res){
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
 * Update Disciplina
 *
 * body Disciplina 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateDisciplina = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE disciplina set ano = ?, curso_id = ?, nome = ?, professor_id = ? where id = ?", [body.ano, body.curso_id,body.nome, body.professor_id, id], function(err, res){
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

