import { getRates } from './ajax.js';
const tasaCambio = 1.1;

function origenToDestino() {
  document.getElementById('cantidadOrigen').addEventListener('change', function() {
    let cantidadOrigen = document.getElementById('cantidadOrigen').value;
    let cantidadDestino = cantidadOrigen * tasaCambio;
    document.getElementById('cantidadDestino').value = cantidadDestino;
  });
}

function destinoToOrigen() {
  document.getElementById('cantidadDestino').addEventListener('change', function() {
    let cantidadDestino = document.getElementById('cantidadDestino').value;
    let cantidadOrigen = cantidadDestino * tasaCambio;
    document.getElementById('cantidadOrigen').value = cantidadOrigen;
  });
}

origenToDestino();
destinoToOrigen();
console.log(getRates());
