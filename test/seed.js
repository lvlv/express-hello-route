var Faker = require('Faker');
var fs = require('fs');
var body = '';

for (var i = 0; i< 200; i++) {
  body += Faker.Name.firstName().toLowerCase() + '\n';
}

fs.writeFile(__dirname + '/logins.txt', new Buffer(body));