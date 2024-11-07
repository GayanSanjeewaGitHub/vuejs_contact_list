import express from 'express'
import bodyParser  from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'


const app =  express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())


app.post('/register' , (req , res) =>{
    res.send({
        message: `registered   ${req.body.email}`
    })

})

app.listen(process.env.PORT || 8081)