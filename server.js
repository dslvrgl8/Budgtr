const express = require('express')
const app = express()
const methodOverride = require('method-override')
const budgets = require('./models/budget')

app.set('view engine', 'ejs');
// Middleware
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("Hello Adult Life")
});

app.get('/budgets', (req, res) => {
    res.render('index.ejs', {budgets: budgets});
});

app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
});

app.post('/budgets', (req, res) => {
    console.log(req.body)
    req.body.amount = parseInt(req.body.amount)
    budgets.push(req.body)
    res.redirect('/budgets')
});

app.get('/budgets/:id', (req, res) => {
    const budgetItem = budgets[req.params.id]
    res.render('show.ejs', {budgetItem});
});

app.listen(4000, () => {
    console.log('Listening on port 4000')
});
