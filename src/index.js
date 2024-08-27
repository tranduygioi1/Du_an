const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
var app = express();
const POST = 4400;

                                                const route = require('./routes');

                                                app.use(express.static(path.join(__dirname, 'public')));
                                                app.use(
                                                express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//http logger
// app.use(morgan('combined'))

//temolate engine
                                                                                                app.engine(
                                                                                                'hbs',
                                                                                                engine({
                                                                                                    extname: '.hbs',
                                                                                                }),
                                                                                                );
                                                                                                app.set('view engine', 'hbs');
                                                                                                app.set('views', path.join(__dirname, 'resources/views'));

                                                                                                // Routers init
                                                                                                route(app);

                                                                                                app.listen(POST, () => {
  console.log('Start Server');
});
