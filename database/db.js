const mysql = require('mysql');

const conexion = mysql.createConnection({
    database: "login_node",
    user: "c7x80zy4agmi",
    host: "54v3bb66nspk.us-east-3.psdb.cloud",
    password: "pscale_pw_pkdwdqSSZot3Pcqbusgf6Ulh2DRZPe3IvfP7b5QDsDo",
    ssl:{
        rejectUnauthorized: false
    }
});

conexion.connect((error)=>{
    if(error){
        console.log(`El error de conexion es: ${error}`);
        return;
    }else{
        console.log(`Conectado a la base de datos`);
    }
});
module.exports = conexion;