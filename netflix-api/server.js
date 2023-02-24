const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
require("dotenv").config();


const app = express();

app.use(cors())
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/api/user", userRoutes);
app.listen(5000, () => { console.log("server Started") });