var express = require('express');
var app = express();

app.listen(5000, (err)=>{
	console.log("Server is listening on port 5000");
});

// Start tsc task to transpile the ts files.

app.get('', function(req, res,next){
    res.send('VSCode : NodeJs configuration using typescript.');
    next();
});

app.get('/set', function(req, res,next){
    res.send('typescript configuration works');
    next();
});
