const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

//Define a porta do backend
const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () => {
  console.log(`Server esta rodando na porta: ${PORT}.`);
});