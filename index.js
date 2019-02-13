// jshint esversion:6

var cowsay = require("cowsay");
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');
const fs = require('fs');

const edad = Math.ceil(Math.random() * 100);
const personaje = "vaquita feliz";
const lugar = "la granja feliz";
const amigos = "pollin y cochimon";
const villano = "Nutria";
const broma = "perfumo";
let opcion = "bañarse todas las semanas";
let end = "sus amigos se reian de ella";

const introHistoria = intro.historia(personaje, lugar, amigos, edad);
const nudoHistoria = nudo.historia(personaje, villano, broma);
const finalHistoria = final.historia(opcion, end);
const historiaCompleta = introHistoria + nudoHistoria + finalHistoria;

fs.writeFile('/Users/JAVC/Desktop/historia.txt', historiaCompleta, (err) => {
    if(err) {
        console.log(err);
    }
});

console.log(cowsay.say({
	text : "Hola amigos ",
	e : "0 0",
	T : "U "
}));
