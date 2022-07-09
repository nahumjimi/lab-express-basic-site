const express = require('express')

const app = express()

app.use(express.static('public')) // para crear un servidor estatico dentro de la carpeta public

app.get('/', (req, res, next)=>{
    console.log(__dirname) //dirname es para apuntar en concreto la carpeta, te devuelve la dirección de donde está colocado el file
    res.sendFile(__dirname + '/views/Home.html')
})

app.get('/About', (req, res, next) =>{
    res.sendFile(__dirname + '/views/About.html')
})

app.get('/PhotoGallery', (req, res, next) =>{
    res.sendFile(__dirname + '/views/PhotoGallery.html')
})

app.get('/Works', (req, res, next) =>{
    res.sendFile(__dirname + '/views/Works.html')
})

app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname + '/views/notFound.html')                 // para mandar el error que queremos que aparezca
})

app.listen(2000, ()=>{
    console.log('Listening on port 2000');
})