var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs');

router.get('/api', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/apidashboard', function(req, res, next) {
    console.log(res.send('respond with a resource'));
});

//get apidashboard
// router.get('/apidashboard', function(req, res, next) {
//     var apidashboard = apidashboard.getApiUri(req.params.api_uri)
//     res.status(200).json(apidashboard);
// });

// function jsonReader(filePath, cb) {
//     fs.readFile(filePath, (err, fileData) => {
//         if(err) {
//             return cb && cb(err)
//         }
//         try {
//             const object = JSON.parse(fileData)
//             return cb && cb(err)
//         }
//         try {
//     }
// }

// router.get('/apidashboard', function(req, res, next) {
//             res.status(200).json(apidashboard);
//             res.end(JSON.stringify(json));
//             var json = JSON.stringify(apidashboard)
// });

    // router.get('/apidashboard', function(req, res, next) {
//     var =
//     res.status(200).JSON.parse(apidashboard);
//     res.end(JSON.stringify(json));
//     var json = JSON.stringify(apidashboard)
// });

// exports.getApiUri = function(api_uri) {
//     for (var i = 0; i < apidashboard.length; i++) {
//         if (apidashboard[i].api_uri == api_uri) return apidashboard[i];
//     }
// };

module.exports = router;
