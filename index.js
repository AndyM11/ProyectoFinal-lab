//1. invocamos el modulo express
const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;

//2. seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//4. establecemos la ruta de la carpeta public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//5. establecemos el motor de la plantilla ejs
app.set('view engine', 'ejs');

//6. invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

//7. variable de sessio
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//8. invocamos al modulo conexion de la BD
const conexion = require('./database/db');

//9. establecemos las rutas
app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

/*

//10. Registramos el usuario
app.post('/register', async (req, res) => {
    const user = req.body.user;
    const name = req.body.name;
    const pass = req.body.pass;
    let passwordHaash = await bcryptjs.hash(pass, 8);
    conexion.query('INSERT INTO usuarios SET ?', { user: user, name: name, pass: passwordHaash }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.render('register', {
                alert: true,
                alertTitle: 'Registro exitoso',
                alertMessage: 'El usuario se ha registrado correctamente',
                alertIcon: 'success',
                showConfirmButton: false,
                timer: 1500,
                ruta: ''
            })
        }
    });
});

//11. Autenticamos al usuario
app.post('/auth', async (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    let passwordHaash = await bcryptjs.hash(pass, 8);
    if (user && pass) {
        conexion.query('SELECT * FROM usuarios WHERE user = ?', [user], async (error, results) => {
            if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
                res.render('login', {
                    alert: true,
                    alertTitle: 'Error',
                    alertMessage: 'Usuario o contraseña incorrectos',
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                });
            } else {
                req.session.loggedin = true;
                req.session.name = results[0].name;
                res.render('login', {
                    alert: true,
                    alertTitle: 'Conexión exitosa',
                    alertMessage: 'Login correcto',
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: ''
                });
            }
        })
    } else {
        res.render('login', {
            alert: true,
            alertTitle: 'Advertencia',
            alertMessage: 'Por favor ingrese un usuario y/o contraseña',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        });
    }
});

//12. Auth pages
app.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.render('index', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab1', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab1', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab2', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab2', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab3', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab3', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab4', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab4', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab5', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab5', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});


app.get('/lab6', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab6', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab7', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab7', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab7a', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab7a', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab7b', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab7b', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab7c', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab7c', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});


app.get('/lab8', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab8', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

app.get('/lab9', (req, res) => {
    if (req.session.loggedin) {
        res.render('lab9', {
            login:true,
            name: req.session.name
        });
    } else{
        res.render('login', {
            login:false,
            name: 'Debe iniciar sesion'
        });
    }
    
});

//13. Logout
app.get('/logout', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/');
    });
});*/

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}
);

app.listen(PORT, (req, res) => {
    console.log(`El servidor esta escuchando por el puerto ${PORT}`);
});