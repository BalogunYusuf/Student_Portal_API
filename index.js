//import "dotenv/config"
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const courseRoute = require("./Routes/courseRoute")

const compass_string = process.env.COMPASS_STRING
const atlas_string = process.env.ATLAS_STRING


mongoose.connect(atlas_string)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB:", err));

const app = express();
const port = 3000;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is active");
})

app.use("/users", userRoute);
app.use("/course", courseRoute)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})