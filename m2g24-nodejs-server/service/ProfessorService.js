'use strict';
var sql = require('../utils/db.js');

/**
 * Create Professor
 *
 * body Professor  (optional)
 * returns Professor
 **/
exports.createProfessor = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO professor (nome) values (?)", [body.nome], function(err, res){
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
 * Delete Professor
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteProfessor = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM professor where id = ?", [id], function(err, res) {
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
 * Retrieve Professor
 *
 * id Long 
 * returns Professor
 **/
exports.retrieveProfessor = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM professor WHERE id = ?", [id], function(err, res){
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
 * Retrieve Professores
 *
 * returns List
 **/
exports.retrieveProfessores = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM professor", function(err, res){
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
 * Update Professor
 *
 * body Professor 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateProfessor = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE professor set nome = ? where id = ?", [body.nome, id], function(err, res){
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

