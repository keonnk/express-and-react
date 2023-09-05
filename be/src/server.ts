import express from 'express'

const app = express()

app.use(express.static('../fe/public'));

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: '../fe/public'})
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})