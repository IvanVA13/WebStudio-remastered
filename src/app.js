const express = require("express")
const exhbs = require('express-handlebars');
const data = require('../data.json');
const PORT = process.env.PORT || 4444;

const app = express()

app.use(express.static('public'))

app.set('view engine', 'hbs');

app.engine('hbs', exhbs({
    extname: "hbs",
}));

app.get("/", (req, res) => {
    res.render('home', {layout: "main", isHome: true, data, fileName: 'home'})
})

app.get("/portfolio", (req, res) => { res.render('portfolio', {isPortf: true, data, fileName: 'portfolio'})})

app.listen(PORT, () => { console.log(`port ${PORT}`) })