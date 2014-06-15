var page = require('webpage').create();

var names = ['yury', 'peter', 'mark', 'john', 'misha', 'jessica', 'mary', 'linda', 'lisa'];

page.viewportSize = { width: 1920, height: 1080 };

page.evaluate(function() {
    document.body.bgColor = 'white';
});

names.forEach(function(name) {
    page.open('http://localhost:3131/hello/' + name, function() {
        //don't work..
        page.render(name + '.png', {format: 'png', quality: '100'});

        phantom.exit();
    });
});
