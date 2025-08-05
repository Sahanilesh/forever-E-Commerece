import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import uploadOnCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.routes.js";
import dotenv from "dotenv";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/order.route.js"

dotenv.config({
    path: "./env"
})

//App config

const app = express();

const port = process.env.PORT || 4000;
connectDB();
uploadOnCloudinary();

// middleware

app.use(express.json()); // For parsing application/json
app.use(cors())

// api endpoints:
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

//cart api endpoints:
app.use('/api/cart', cartRouter)
//order api endpoints:
app.use('/api/order', orderRouter)


app.get('/', (req, res) => {
    res.send("API WORKING")
});

// start server
app.listen(port, () => {
    console.log("Server is running on port:", port)
})