const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Models
const models = require('./models/budget')
const budgets = models.budget

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Hello Adult Life")
});

app.get('/budgets', (req, res) => {
    res.render('index.ejs', {budgets: budgets});
});

app.get('/budgets/:index', (req, res) => {
    res.send("Part 1")
});

app.get('/budgets/new', (req, res) => {
    res.send('new money time')
});

app.post('/budgets', (req, res) => {
    res.send('post time')
});

app.listen(4000, () => {
    console.log('Listening on port 4000')
});
