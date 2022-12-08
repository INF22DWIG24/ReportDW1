'use strict';


/**
 * Create Professor
 *
 * body Professor  (optional)
 * returns Professor
 **/
exports.createProfessor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
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
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Professores
 *
 * returns List
 **/
exports.retrieveProfessores = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome" : "nome"
}, {
  "nome" : "nome"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
  });
}

