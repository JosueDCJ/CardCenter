var mongoose = require('mongoose');//LA BD MONGO
var Schema = mongoose.Schema;//ESQUEMA DE MONGO, NECESARIO
var card = new Schema({
    //OBJETOS PT1
    NOMBRE : String, 
    CARDTYPE: String,
    SUBTYPE: String,
    ATTRIBUTE: String,
    LEVEL: Number,
    TRAPSSPELLTYPE: String,
    RARITY: String,
    CIRCULATION: String,
    SET1: Number,
    SET2: Number,
    TYPE: String,
    CARDDESCRIPTION: String,
    ATK: Number,
    DEF: Number,
    CREATOR: String,
    YEAR: Number,
    SERIAL: Number,
    IMAGEN: String,
});
module.exports = mongoose.model('schema',card);//HACE VISIBLE LA FUNCION