const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

const compass_string = "mongodb://localhost:27017/student_portal_db"
const atlas_string = "mongodb+srv://brandingpro21_db_user:brandingpro21_db_user@cluster0.6jktfqz.mongodb.net/student_portal_db?appName=Cluster0"


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

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})