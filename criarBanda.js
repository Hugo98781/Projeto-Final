const banda = require('./api/models/banda.js');

const Dazaranha = new banda({
    _id: "201",
    genero: "Reggae Rock",
    integrantes: ["Chico Martins", "Adauto", "Fernando", "Moriel", "Gerry"],
    plataforma: "Spotify",
    fundacao: "1992"
});

const Armandinho = new banda({
    _id: "202",
    genero: "Reggae/Pop",
    integrantes: ["Armandinho", "Lucio Dorfman", "João 'Coiote' Pereira", "Luciano Granja", "Pedro Porto", "Marcus 'Gordo' Lopes", "Cristiano Bertolucci", "Renato Batista"],
    plataforma: "Spotify",
    fundacao: "2002"
});

Dazaranha.save().then(function(){
    console.log("Dazaranha salvo no banco!");
});

Armandinho.save().then(function(){
    console.log("Armandinho salvo no banco!");
});
