var http = require('http')
, fs   = require('fs')
, url  = require('url')
, port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)
  if(uri.pathname.includes('.jpg')) {
    sendFile(res, 'public' + uri.pathname);
} else {
  switch( uri.pathname ) {
    case '/':
    sendFile(res, 'public/index.html')
    break
    case '/index.html':
    sendFile(res, 'public/index.html')
    break
    case '/css/style.css':
    sendFile(res, 'public/css/style.css', 'text/css')
    break
    case '/js/scripts.js':
    sendFile(res, 'public/js/scripts.js', 'text/javascript')
    break
    case '/email.png':
    sendFile(res, 'public/email.png', 'image/png')
    break
    case '/github.png':
    sendFile(res, 'public/github.png', 'image/png')
    break
    case '/phone.png':
    sendFile(res, 'public/phone.png', 'image/png')
    break
    default:
    res.end('404 not found')
}
}
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
})

}
