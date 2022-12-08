'use strict';
var sql = require('../utils/db.js');

/**
 * Create Curso
 *
 * body Curso  (optional)
 * returns Curso
 **/
exports.createCurso = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO curso (nome, nr_anos) values (?, ?)", [body.nome, body.nr_anos], function(err, res){
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
 * Create disciplina by curso
 *
 * body Curso  (optional)
 * id Long 
 * returns Curso
 **/
exports.createdisciplina_by_curso = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO disciplina (ano, curso_id, nome, professor_id) values (?, ?, ?, ?)", [body.ano, id, body.nome, body.professor_id], function(err, res){
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
 * Delete Curso
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteCurso = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM curso where id = ?", [id], function(err, res) {
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
 * Retrieve curso
 *
 * id Long 
 * returns Curso
 **/
exports.retrieveCurso = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM curso WHERE id = ?", [id], function(err, res){
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
 * Retrieve Curso
 *
 * returns List
 **/
exports.retrieveCursos = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM curso", function(err, res){
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
 * Update Curso
 *
 * body Curso 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateCurso = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE curso set nome = ?, nr_anos = ? where id = ?", [body.nome, body.nr_anos, id], function(err, res){
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

