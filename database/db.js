const mysql = require('mysql');

const conexion = mysql.createConnection({
    database: "login_node",
    user: "x1tkje4zsf6y",
    host: "54v3bb66nspk.us-east-3.psdb.cloud",
    password: "pscale_pw_8ky9cQ1E-XRaJXYgQ1cjoVRvqS-DMcdaQMdZgT7cXaU",
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