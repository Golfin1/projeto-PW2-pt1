const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('preparar a chegada do caminhão')
})

app.listen(3000, ()=>{ 
    console.log('funcionando'); 
});

