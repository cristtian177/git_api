const { query } = require("express")
const express=require("express")

const app=express()
const port=5000

// rutas
app.listen(port, () => console.log(`Escuchando el Puerto ${port}`))

app.get('/api', (req,res)=> {
    return res.status(200).json[{message: "Bienvenido al Api"} ]
})

app.get('/division/:num1/:num2',  (req,res)=> {
    //division/24/8
    let result = parseFloat(req.params.num1) / parseFloat(req.params.num2)
    console.log( 'req.params' )
    console.log( req.params )
    console.log(`${req.params.num1} / ${req.params.num2} = ${result}` )
    return res.status(200).json({result: result})

})

app.get('/division',  (req,res)=> {
    //division?num1=15&&num2=3
    let result = parseFloat(req.query.num1) / parseFloat(req.query.num2)
    console.log( 'req.query' )
    console.log( req.query )
    console.log(`${req.query.num1} / ${req.query.num2} = ${result}` )
    return res.status(200).json({result: result})

})