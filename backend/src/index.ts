const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const db = require("./util/dbconection.ts");

//Define a porta do backend
const PORT = process.env.PORT || 3005;


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// cors
app.use(cors()) //cors não tem nenhum filtro

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo ao login" });
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(PORT, () => {
  console.log(`Server esta rodando na porta: ${PORT}.`);
});