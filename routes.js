var controllercard = require('./controllercard.js'); //pide el controller solicitado por el Front end
var controlleradministrador = require('./controlleradministrador.js');
module.exports = function(app){//entra para hacer consultas
    var clasecard = new controllercard();//nuevo objeto con las funciones requeridas por el FE que las busca en el controller
    app.post('/api/Nuevacard', clasecard.Guardar);//busca la funcion en el controller
    app.post('/api/Modificacard', clasecard.Modificar);
    app.post('/api/Eliminarcard', clasecard.Eliminar);
    app.post('/api/Seleccionarcard', clasecard.Seleccionartodos);
    app.post('/api/Seleccionarporid', clasecard.Seleccionarporid);
    app.post('/api/Seleccionarcardpornombre', clasecard.Seleccionarpornombre);
    
    var claseadm = new controlleradministrador();
    app.post('/api/nuevoadm', claseadm.Guardar);
    app.post('/api/loginadm', claseadm.Login);
    
    //si llama directamente al server entonces:
    app.get('*', function(req, res){//localhost:8080
        res.sendfile('./login.html');//carga unica de la vista
    });
};