import bodyParser from "body-parser"
import express from "express"
import morgan from "morgan"
import { initDb } from "./db/Sequelize.js"
import loginRoutes from "./Routes/Login.js"
import cors from 'cors';
const app = express()

const port = 9000

app
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(cors())
  .use('/api/login',loginRoutes)

initDb()
app.get('/',(req,res)=>{
    res.send("Great that's works")
})

app.listen(port , ()=>{
    console.log(`Our server is running on port ${port}`)
})