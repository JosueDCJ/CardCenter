var controllercard = require('./controllercard.js'); //solicita controller
//var controllerAdministrador = require('./controlleradministrador.js');
module.exports = function(app){//entra para hacer consultas
    var clasecard = new controllercard();//objeto
    app.post('/api/Nuevacard', clasecard.Guardar);
    app.post('/api/Modificacard', clasecard.Modificar);
    app.post('/api/Eliminarcard', clasecard.Eliminar);
    app.post('/api/Seleccionarcard', clasecard.Seleccionartodos);
    app.post('/api/Seleccionarporid', clasecard.Seleccionarporid);
    app.post('/api/Seleccionarcardpornombre', clasecard.Seleccionarpornombre);
    
  //  var claseadm = new controllerAdministrador();
   // app.post('/api/nuevoadm', claseadm.Guardar);
    //app.post('/api/loginadm', claseadm.Login);
    
    //si llama directamente al server entonces:
    app.get('*', function(req, res){//localhost:8080
        res.sendfile('./login.html');//carga unica de la vista
    });
};