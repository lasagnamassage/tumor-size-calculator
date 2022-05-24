const express = require('express');
const app = express();
var path = require('path');
const port = process.env.PORT || 8080;

let fileName = "index.html";

app.use(express.static('public'))


app.get('/', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'public'),
      dotfiles: 'deny',
    }
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})