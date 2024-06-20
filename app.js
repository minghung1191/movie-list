const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.redirect('/movies') //直接導向movies頁面
})

app.get('/movies', (req, res) => {
    res.send('listing movies')
})

app.get('/movie/:id', (req, res) => {
    const id = req.params.id
    res.send(`reading movie: ${id}`)
})

app.listen(port, () => {
    console.log(`express server is running on http://localhost:${port} `)
})