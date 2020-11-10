import express from 'express'
import cors from 'cors'
import routes from './routes.js'

const app = express()
app.use(routes)
app.use(express.json)
app.use(cors())


app.listen(3333, function() {
    console.log("Server rodando na porta 3333");
})