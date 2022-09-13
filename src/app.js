const express = require('express')
const { engine } = require("express-handlebars");
const taskRoutes = require('./routes/task.routes')
const pointRoutes = require('./routes/point.routes')
const notificationRoutes = require('./routes/notification.routes')
const productRoutes = require('./routes/product.routes')
const empleadosRoutes = require('./routes/empleados.routes')
const indexRoutes = require('./routes/index.routes')
const path = require('path')
const morgan = require('morgan')

const app = express()

app.set('views', path.join(__dirname, 'views'));

app.engine(
    '.hbs',
     engine({
        layoutsDir:  path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get("views"), "partials"),
        defaultLayout: 'main',
        extname: ".hbs",
    })
);

app.set('view engine', '.hbs');

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//rutas
app.use(indexRoutes);
app.use(taskRoutes);
app.use(pointRoutes);
app.use(notificationRoutes);
app.use(empleadosRoutes);
app.use(productRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
