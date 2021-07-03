const musica = require('./api/models/musica.js');

const Birutas = new musica({
    _id: "01",
    album: "",
    musica: "Birutas",
    data: "2019"
});

const Sulamericanos = new musica({
    _id: "02",
    album: "",
    musica: "Sulamericanos",
    data: "2029"
});

const CoisasDeDeus = new musica({
    _id: "03",
    album: "",
    musica: "Coisas de Deus",
    data: "2019"
});

const Salinas = new musica({
    _id: "04",
    album: "",
    musica: "Salinas",
    data: "2019"
});

const ANossaCor = new musica({
    _id: "05",
    album: "",
    musica: "A Nosssa Cor",
    data: "2019"
});

const ZePerri = new musica({
    _id: "06",
    album: "",
    musica: "Ze Perri",
    data: "2019"
});

const OSal = new musica({
    _id: "07",
    album: "",
    musica: "O Sal",
    data: "2019"
});

const SeTuDiz = new musica({
    _id: "08",
    album: "",
    musica: "Se Tu Diz",
    data: "2019"
});

const TamoJunto = new musica({
    _id: "09",
    album: "",
    musica: "Tamo Junto",
    data: "2019"
});

const TodosOsDeuses = new musica({
    _id: "10",
    album: "",
    musica: "Todos os Deuses",
    data: "2019"
});

const OBeijo = new musica({
    _id: "11",
    album: "",
    musica: "O Beijo",
    data: "2019"
});

const TuTensMais = new musica({
    _id: "12",
    album: "Catarina",
    musica: "Tu Tens Mais",
    data: "2019"
});

const AlmaLeve = new musica({
    _id: "13",
    album: "",
    musica: "Alma Leve",
    data: "2019"
});

const CrimePerfeito = new musica({
    _id: "14",
    album: "",
    musica: "Crime Perfeito",
    data: "2019"
});

Birutas.save().then(function(){
    console.log("Birutas salvo no banco!");
});

Sulamericanos.save().then(function(){
    console.log("Sulamericanos salvo no banco!");
});

CoisasDeDeus.save().then(function(){
    console.log("Coisas de Deus salvo no banco!");
});

Salinas.save().then(function(){
    console.log("Salinas salvo no banco!");
});

ANossaCor.save().then(function(){
    console.log("A Nossa Cor salvo no banco!");
});

ZePerri.save().then(function(){
    console.log("Ze Perri salvo no banco!");
});

OSal.save().then(function(){
    console.log("O Sal salvo no banco!");
});

SeTuDiz.save().then(function(){
    console.log("Se Tu Diz salvo no banco!");
});

TamoJunto.save().then(function(){
    console.log("Tamo Junto salvo no banco!");
});

TodosOsDeuses.save().then(function(){
    console.log("Todos od Deuses salvo no banco!");
});

OBeijo.save().then(function(){
    console.log("O Beijo salvo no banco!");
});

TuTensMais.save().then(function(){
    console.log("Tu Tens Mais salvo no banco!");
});

AlmaLeve.save().then(function(){
    console.log("Alma Leve salvo no banco!");
});

CrimePerfeito.save().then(function(){
    console.log("Crime Perfeito salvo no banco!");
});