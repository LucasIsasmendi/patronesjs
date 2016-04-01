require(
  [],
  function(){
    'use strict';

    var ejemplos = {};
    window.correrEjemplo = function(ejemplo){
      ejemplos[ejemplo].init();
    };
  }
)
