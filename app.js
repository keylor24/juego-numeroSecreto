/*let titulo = document.querySelector('h1');
 titulo.innerHTML = 'Juego del número secreto';

 let parrafo = document.querySelector('p');
 parrafo.innerHTML = 'Indica un número del 1 al 10';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo= 10;
let maximosIntentos = 5;

function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

 function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   if (numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} `)
      document.getElementById('reiniciar').removeAttribute('disabled');
   }
   else{
      //el usuario no acertó
      if(numeroDeUsuario > numeroSecreto){
         asignarTextoElemento('p', 'El número secreto es menor');
      } else{
         asignarTextoElemento('p', 'El número secreto es mayor');
      }
      intentos++;
      limpiarCaja();

      if(intentos > maximosIntentos) {
         asignarTextoElemento('p',`Has llegado al numero máximo de ${maximosIntentos} intentos.`);
         document.getElementById('reiniciar').removeAttribute('disabled');
      }

   }

    return;
 }

 function limpiarCaja()
 {
   document.querySelector('#valorUsuario').value = '';
 }

 function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  //si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
   }else{
      // si el numeroGenerado está incluido en la lista
      if(listaNumerosSorteados.includes(numeroGenerado)){
         return generarNumeroSecreto();
      }else{
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }

}

function condicionesIniciales(){
   asignarTextoElemento('h1', 'Juego del número secreto');
   asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

function reiniciarJuego()
{
   //limpiar caja
   limpiarCaja();
   //Indicar mensaje de intervalo de numeros
   //Generar el número aleatorio
   //Inicializar el número de intentos
   condicionesIniciales();
   //Deshabilitar el boton de nuevo Juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

