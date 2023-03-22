function init() {
    //variables
    var display = document.getElementById('display');
    var borrar = document.getElementById('borrar');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var punto = document.getElementById('punto');
}


//Eventos de click
uno.onclick = function (e) {
    display.textContent = display.textContent + "1";
}
dos.onclick = function (e) {
    display.textContent = display.textContent + "2";
}
tres.onclick = function (e) {
    display.textContent = display.textContent + "3";
}
cuatro.onclick = function (e) {
    display.textContent = display.textContent + "4";
}
cinco.onclick = function (e) {
    display.textContent = display.textContent + "5";
}
seis.onclick = function (e) {
    display.textContent = display.textContent + "6";
}
siete.onclick = function (e) {
    display.textContent = display.textContent + "7";
}
ocho.onclick = function (e) {
    display.textContent = display.textContent + "8";
}
nueve.onclick = function (e) {
    display.textContent = display.textContent + "9";
}
cero.onclick = function (e) {
    display.textContent = display.textContent + "0";
}
punto.onclick = function (e) {
    display.textContent = display.textContent + ".";
}
borrar.onclick = function (e) {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
}
reset.onclick = function (e) {
    display.textContent = "";
}
suma.onclick = function (e) {
    display.textContent = display.textContent + "+";
}
resta.onclick = function (e) {
    display.textContent = display.textContent + "-";
}
multiplicacion.onclick = function (e) {
    display.textContent = display.textContent + "*";
}
division.onclick = function (e) {
    display.textContent = display.textContent + "/";
}
igual.onclick = function (e) {
    resolver();
}


function resolver() {
    var res = eval(display.textContent);
    display.textContent = res;
}