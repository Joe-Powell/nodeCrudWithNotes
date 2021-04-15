const express = require('express')
const app = express()

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => { res.render("index") })


app.post('/comment', (req, res) => {
    console.log(req.body.comment);

})
















app.listen(3000)