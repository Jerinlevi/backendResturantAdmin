require('dotenv').config()
const express=require('express')
const cors=require('cors')
const connectDb=require('./config/db')
const menuRoutes=require('./routes/menuRoutes')
const orderRoutes=require('./routes/orderRoutes')
const app=express()
app.use(express.json())
app.use(cors())
connectDb()

const PORT=process.env.PORT||8000
app.use('/api/menu',menuRoutes)
app.use('/api/order',orderRoutes)
app.get('/',(req,res)=>{
    res.status(200).json({'status':"OK",'message':"Running"})
})
app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})