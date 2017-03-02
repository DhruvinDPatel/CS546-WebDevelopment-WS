const express = require("express");

let app = express();
let configureRoutes = require("./routes");

configureRoutes(app);

app.listen(3000, () => {
    console.log("Server running on 3000");
})