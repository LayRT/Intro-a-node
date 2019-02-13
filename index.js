// jshint esversion:6

/****************
 * Modulos
 ***************/
var cowsay = require("cowsay");
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');
const fs = require('fs');

/***************
 * Variables
 ***************/
const edad = Math.ceil(Math.random() * 100);
let personaje = "vaquita feliz";
const lugar = "la granja feliz";
const amigos = "pollin y cochimon";
const villano = "Nutria";
const broma = "perfumo";
let opcion = "bañarse todas las semanas";
let end = "sus amigos se reian de ella";

// Read a character
fs.readFile("personajes.txt", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        let personajes = data.split(",");
        let numberOfCharacters = personajes.length;
        let randomCharacterIndex = Math.floor(Math.random() * numberOfCharacters);
        personaje = personajes[randomCharacterIndex];
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
            text : `Esta es la historia de ${personaje}, ve el archivo generado`,
            e : "0 0",
            T : "U "
        }));
    }
});

