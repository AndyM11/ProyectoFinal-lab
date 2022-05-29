const mysql = require('mysql');

const conexion = mysql.createConnection({
    database: "login_node",
    user: "pttxcacn56te",
    host: "54v3bb66nspk.us-east-3.psdb.cloud",
    password: "pscale_pw_xTMFUDLSAnhVw8LL898dBZSVACVaCsJuTukKV-gjj5U",
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