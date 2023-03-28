const express = require('express')
const app = express()
const methodOverride = require('method-override')
const budgets = require('./models/budget')

app.set('view engine', 'ejs');

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
    res.send('post time')
});

app.get('/budgets/:id', (req, res) => {
    const budgetItem = budgets[req.params.id]
    res.render('show.ejs', {budgetItem});
});

app.listen(4000, () => {
    console.log('Listening on port 4000')
});
