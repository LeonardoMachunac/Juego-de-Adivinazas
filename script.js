// Acá el juego selecciona un número al azar para que adivines
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')
let intento =document.getElementById('intento')
let intentos = 0



function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100'
        mensaje.style.color = 'red';
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje.style.color = 'red';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = '¡Mas alto! El número es mayor al que dijistes.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = ' ¡Mas bajo! El número es menor. Intenta de nuevo.';
        mensaje.style.color = 'red';
    }
}