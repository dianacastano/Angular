const express = require("express")
const cors = require ("cors")
const libroRouters = require ("../src/routes/libros")
const loginRouters = require ("../src/routes/login")
const registroRouters = require ("../src/routes/registro")

const app = express();

app.set ("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(libroRouters);
app.use(loginRouters);
app.use(registroRouters);

app.use(function (request, response, next)
{
    response.status(404).json({error: true,
                                codigo: 404,
                                message: "Endpoint doesnt found"})
});



module.exports = app;