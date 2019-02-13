// jshint esversion:6

module.exports ={
historia: function (personaje, lugar, amigos, edad) {
  if (edad > 18) {
   return `${personaje} vivia una historia triste porque no lograba encontrar el amor,
   ella tenia ${edad}, ella no tenía amigos, y ${amigos} se burlaban de ella `;
  }

  return `Había una vez una vaquita de ${edad} años que se llamaba ${personaje} que vivia en ${lugar},
  ella vivia con sus amigos ${amigos}  y eran muy felices`;
  }
};
