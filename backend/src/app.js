import dns from "dns";
import "dotenv/config";
import { connectToSocket } from "./controllers/socketManager.js";
import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");
const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT||8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users", userRoutes);
app.get("/health",(req,res)=>{
    return res.json({
        success:true,
        message: "Server is running healthy"
    })
});
// console.log(process.env.MONGODB_URI);
const start=async()=>{
    const connectionDb=await mongoose.connect(process.env.MONGODB_URI)
    console.log("mongodb connected");
    server.listen(app.get("port"),()=>{
        console.log("listening on port no 8000");
        // console.log("MongoDB state:", mongoose.connection.readyState);

    })
}
start();