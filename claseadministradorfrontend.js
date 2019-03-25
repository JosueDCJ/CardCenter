  class _Administrador {
        
                                   
            
   constructor(_id,
    NOMBRE,
    CLAVE,
    EMAIL,
    IMAGEN,
    ESTADO
            ) {
       this._id=_id;
this.NOMBRE =NOMBRE;
    this.CLAVE=CLAVE;
    this.EMAIL=EMAIL;
    this.IMAGEN=IMAGEN;
   }
Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://bbcitaa.herokuapp.com/api/nuevoadm');
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
    
 Login() {
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://bbcitaa.herokuapp.com/api/loginadm');
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
      $("#imagen").change(function(){
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
            {
                var administradorinstanciado = new _Administrador(0,
                document.getElementById("Nombre").value,
                 document.getElementById("clave").value,
                document.getElementById("email").value,
          imagenenbase64,
                );
                                                        
                administradorinstanciado.Guardar().then(function(response) {
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
           
});                                       
                                                        
            }
