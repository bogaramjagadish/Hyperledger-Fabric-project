const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Welcome to world best mern series ");
 
});

const PORT = 27017;

app.listen(PORT, () => {
    console.log("server is runing at port: ${PORT}");
});