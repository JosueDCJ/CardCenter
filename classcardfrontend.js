     
        class _Card {
        
                                   
            
   constructor(_id, 
NOMBRE,
    CARDTYPE,
    SUBTYPE,
    ATTRIBUTE,
    LEVEL,
    TRAPSSPELLTYPE,
    RARITY,
    CIRCULATION,
    SET1,
    SET2,
    TYPE,
    CARDDESCRIPTION,
    ATK,
    DEF,
    CREATOR,
    YEAR,
    SERIAL,
    IMAGEN
            ) {
       this._id=_id;
this.NOMBRE =NOMBRE;
    this.CARDTYPE=CARDTYPE;
    this.SUBTYPE=SUBTYPE;
    this.ATTRIBUTE=ATTRIBUTE;
    this.LEVEL=LEVEL;
    this.TRAPSSPELLTYPE=TRAPSSPELLTYPE;
    this.RARITY=RARITY;
    this.CIRCULATION=CIRCULATION;
    this.SET1=SET1;
    this.SET2=SET2;
    this.TYPE=TYPE;
    this.CARDDESCRIPTION=CARDDESCRIPTION;
    this.ATK=ATK;
    this.DEF=DEF;
    this.CREATOR=CREATOR;
    this.YEAR=SERIAL;
    this.SERIAL=SERIAL;
    this.IMAGEN=IMAGEN;
   }
Guardar() {
  //Funcion llamada cuando guarda los datos del boton
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Nuevacard');//hace la solicitud en la api por medio de la ruta
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}
    
 Modificar() {
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Modificacard');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}   
    
    Eliminar() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Eliminacard');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
Seleccionartodos() {
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http
://localhost:8080/api/Seleccionarcard');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    SeleccionarporSET1() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporSET1');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporid() {
	
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
    
    Seleccionarpornombre() {

    
    
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpornombre');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}

}
            
             let imagenenbase64 = "";
      $("#imgcarta").change(function(){
       readURL(this);
 });
    
        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }
    
        function botonguardarclick()
        //donde el boton crea una nueva clase intanciada
            {
          var cardinstanciada = new _Card(0,
          document.getElementById("name").value,
          document.getElementById("cardtype").value,
          document.getElementById("subtype").value,
          document.getElementById("attribute").value,
          document.getElementById("level").value,
          document.getElementById("trapmagictype").value,
          document.getElementById("rarity").value,
          document.getElementById("circulation").value,
          document.getElementById("set1").value,
          document.getElementById("set2").value,
          document.getElementById("type").value,
          document.getElementById("carddescription").value,
          document.getElementById("atk").value,
          document.getElementById("def").value,
          document.getElementById("creator").value,
          document.getElementById("year").value,
          document.getElementById("serial").value,
          imagenenbase64
                );
                                                        
                cardinstanciada.Guardar().then(function(response) {
                  //trata de enviar los datos guardados llamando la funcion guardar del Front End
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
           
});                                       
                                                        
            }
