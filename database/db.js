const mysql = require('mysql');

const conexion = mysql.createConnection({
    /*database: "login_node",
    user: "5vc5pgbaveyk",
    host: "54v3bb66nspk.us-east-3.psdb.cloud",
    password: "pscale_pw_05tLr87UUOJ62443Pj6sGMmvsb4UiSQd3wZ8B664SoE",
    ssl:{
        rejectUnauthorized: false
    }*/
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