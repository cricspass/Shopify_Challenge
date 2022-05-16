const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const mongoURL = require("./src/configs/db.config");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect(mongoURL.url, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB Connection Failed", err));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

var inventory_routes = require("./src/routes/inventory.routes");
app.use("/api/inventory", inventory_routes);

var warehouse_routes = require("./src/routes/warehouse.routes");
app.use("/api/warehouse", warehouse_routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
