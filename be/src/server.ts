import express from 'express'

const app = express()

app.use(express.static('../fe/dist'));

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: '../fe/dist'})
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})