

class _adm {
   constructor(  _ID,
         _NOMBRE,
    _CLAVE,
        _EMAIL,
         _IMAGEN) {
this._ID = _ID;
       this._NOMBRE=_NOMBRE ;
     this._CLAVE=_CLAVE;
         this._EMAIL=_EMAIL;
     this._IMAGEN = _IMAGEN;
        
   }
Guardar() {
   var objetoaenviar = this;

  return new Promise(function(resolve, reject) {

       
      try {

          
          
          
          
               var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/nuevoadm');
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
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
      
      try {
           var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/loginadm');
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

function botonguardarclick(){
  let admactual = new _adm('0',
        document.getElementById("nombre").value,
              document.getElementById("clave").value,
              document.getElementById("email").value,
      imagenenbase64
        
        );
        admactual.Guardar(admactual).then(function(response) {
  console.log("Success!", response);
            alert("Guardado con exito");

}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
             
});
}

function logearse(){

let admactual = new _adm('0',
        "",
              document.getElementById("clavelogin").value,
              document.getElementById("emaillogin").value,
              ""
        
        );
        admactual.Login().then(function(response) {
  console.log("Success!", response);
            alert("login con éxito");
            localStorage.setItem("userlog",JSON.stringify(response));
            location.href="addcard.html";
          
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
               
});
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