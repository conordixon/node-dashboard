const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const dashboard_model = require('../dashboard_model.js');

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/apidashboard', (req, res) => {
    dashboard_model.getDashboard()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
});

        dashboard_model.getDashboard()
        .then(response => {
        var fs = require('fs');
        fs.writeFile('client/public/data/jsonData.json', JSON.stringify(response), function(err) {
        if (err) {
            console.log('Error found : ' + err);
        }
    })
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello world from the server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});