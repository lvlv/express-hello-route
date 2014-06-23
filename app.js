var express = require('express');
var app = express();

app.set('port', 3131);

function toUpperCaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

var users = [];

app.get('/hello/:login', function(req,res) {

});

app.param('login', function (req, res, next, name) {

    users.push(toUpperCaseFirstLetter(name));

    res.status(200);
    res.set('Content-type', 'text/html');
    res.send(
            '<title>Hi ' + toUpperCaseFirstLetter(name) + '</title>' +
            '<html><body>' +
            '<h1>Hello ' + toUpperCaseFirstLetter(name) + '</h1>' +
            '</body></html>'
    );

    // uniq names
    users = users.filter(function(elem, pos, self) {
        return self.indexOf(elem) == pos;
    });

    console.log('login: ' + '"' + name + '"' + '\n' + 'users: ' + users + '\n');

});

app.get('*', function(req, res){
  res.end('Hello World');
});

app.listen(app.get('port'), 'localhost', function(){
  console.log('The server is running, ' +
    ' please open your browser at http://localhost:' +
     app.get('port'));
});