var cowsay = require("cowsay");
const intro = require('./Intro');
const nudo = require('./nudo');
const final = require('./final');

const edad = Math.floor(Math.random() * 100);
const personaje = "vaquita feliz";
const lugar = "la granja feliz";
const amigos = "pollin y cochimon";
const villano = "Nutria";
const broma = "perfumo"
let opcion = "bañar todos los dias"
let end = "sus amigos se reian de ella"

console.log(intro.historia(personaje, lugar, amigos, edad));
console.log(nudo.historia2(personaje, villano, broma));
console.log(final.historia3(opcion, end));
console.log(cowsay.say({
	text : "Hola amigos ",
	e : "xO",
	T : "U "
}));
