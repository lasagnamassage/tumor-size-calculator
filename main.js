const express = require('express');
const app = express();
var path = require('path');
const port = process.env.PORT || 8080;

const pages = {
  home: "index.html",
  changeLog: "changelog.html"
}

app.use(express.static('public'))


app.get('/', function (req, res, next) {
  var options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
  }
  res.sendFile(pages.home, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', pages.home)
    }
  })
})

app.get('/changlog', function(req, res, next) {
  var options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
  };
  res.sendFile(pages.changeLog, options, function(err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', pages.changeLog)
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})