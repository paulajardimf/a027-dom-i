const frutas = ["laranja", "limão", "uva"];

let fruta1 = document.getElementById("fruta-1");

let fruta2 = document.getElementById("fruta-2")

let fruta3 = document.getElementById("fruta-3")




fruta1.innerHTML += frutas[0];
fruta2.innerHTML += frutas[1];
fruta3.innerHTML += frutas[2];

let valorFrutaAdicional = document.getElementById("fruta-add");


function adicionaValorInput() {
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = valorFrutaAdicional.value
};
