var mongoose =  require('mongoose');
var crypto = require ('crypto');
var Schema = mongoose.Schema;
var adm = new Schema({
    NOMBRE: String,
    CLAVE: String, 
    EMAIL: String, 
    IMAGEN: String,
    SALT: String
});

adm.methods.setPassword = function(password){
  
      var claveysalt = []
    var salt = crypto.randomBytes(16).toString('hex');
    console.log('Salt:' + salt);
    claveysalt.push(salt);
 
    claveysalt.push(crypto.pbkdf2Sync(password, salt,1000, 64, 'sha512').toString('hex'));
      console.log('contra:' + claveysalt[1]);
    return claveysalt;
};

adm.methods.validPassword = function(password, clavebuena, salt){
    console.log(this.CLAVE);
    console.log(password);
    console.log(clavebuena);
    
    var hash = crypto.pbkdf2Sync(password, salt,1000, 64, 'sha512').toString('hex');
    return clavebuena === hash;
    console.log(¨¨)
};
module.exports = mongoose.model('Administrador', adm);