var Item = require('./card');//Requiere el esquema de mongoose y todo lo que tenga card,aparecera
module.exports = class _Card {
   constructor( ) {

   }// Para crear campos
Guardar(req,res) {//funcion llamada por el routes para la peticion
	Item.create(//crea
			{//pide la informacion de del constructor de la clase _Card para compararla con el esquema de mongoose y guardarla
  NOMBRE: req.body.NOMBRE,
    CARDTYPE: req.body.CARDTYPE,
    SUBTYPE: req.body.SUBTYPE,
    ATTRIBUTE: req.body.ATTRIBUTE,
    LEVEL: req.body.LEVEL,
    TRAPSSPELLTYPE: req.body.TRAPSSPELLTYPE, //Trap Spell type card
    RARITY: req.body.RARITY,
    CIRCULATION: req.body.CIRCULATION,
    SET1: req.body.SET1,
    SET2: req.body.SET2,
    TYPE: req.body.TYPE,
    CARDDESCRIPTION: req.body.CARDDESCRIPTION,
    ATK: req.body.ATK,
    DEF: req.body.DEF,
    CREATOR: req.body.CREATOR,
    YEAR: req.body.YEAR,
    SERIAL: req.body.SERIAL,
    IMAGEN: req.body.IMAGEN
            }, 
			function(err, item) {
				if (err)//manda error
                    {
					res.send(err);
        }
				
          else{
                Item.find(function(err, item) {//muestra todos los datos
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
    
 Modificar(req,res) {//modifica
		Item.update( {_id : req.body._id},//toma los datos del front end
					{$set:
			{
   NOMBRE: req.body.NOMBRE,
    CARDTYPE: req.body.CARDTYPE,
    SUBTYPE: req.body.SUBTYPE,
    ATTRIBUTE: req.body.ATTRIBUTE,
    LEVEL: req.body.LEVEL,
    TRAPSSPELLTYPE: req.body.TRAPSSPELLTYPE, //Trap Spell type card
    RARITY: req.body.RARITY,
    CIRCULATION: req.body.CIRCULATION,
    SET1: req.body.SET1,
    SET2: req.body.SET2,
    TYPE: req.body.TYPE,
    CARDDESCRIPTION: req.body.CARDDESCRIPTION,
    ATK: req.body.ATK,
    DEF: req.body.DEF,
    CREATOR: req.body.CREATOR,
    YEAR: req.body.YEAR,
    SERIAL: req.body.SERIAL,
    IMAGEN: req.body.IMAGEN
            }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			}
  })
  }
         
  
    
    Eliminar(req,res) {//elimina datos
	Item.remove({_id : req.body.id}, //toma datos del front end
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {
		Item.find(//busca datos de la bd
    function(err, item) {
      if (err)
                
                {
        res.send(err)
                }else{
                
                
          res.json(item); // devuelve todas las Personas en JSON  
                       
                }
        }
      );
    
    
    
}
    
    Seleccionarporid(req,res) { //selecciona por id en el front end y bd
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    Seleccionarpornombre(req,res) { //busca por front end y bd
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
					res.json(item); // devuelve todas las Personas en JSON	
        }    
    }
			);
}

Seleccionarportipo(req,res) { //busca por front end y bd
  Item.find({TYPE:req.body.TYPE}, function(err, item) {
      if (err){
        res.send(err)}
        else{
          res.json(item); // devuelve todas las Personas en JSON  
        }    
    }
      );
}



}