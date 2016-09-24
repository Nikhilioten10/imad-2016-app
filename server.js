var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
    title: 'Article One',
    heading:'ARTICLE ONE', 
    date: 'DATE : september 23, 2016.',
    content: 
    `<p>
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	</p>
	<p>
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	</p>
	<p>
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.Fire in the heart.
	</p>`
};
function createTemplate(data)
{
var title = data.title;
var heading = data.heading;
var date = data.date;
var cintent = data.cintent;
var htmlTemplate = `<html>
<head>
    <title>${title}</title>
	   <meta name="viewport" content="width-device-width,initial-scale=1">
	   <link href="/ui/articleStyle.css" rel="stylesheet" />
</head>
<body>
	<a  href="/">HOME</a>
	<hr>
 <div id = "main-content" class = "container">
	<div>
	  <h3>
	  ${heading}</h3>
	</div>
	<div id = "date">
	   ${date}
	</div>
	<div>
	${content}
	</div>
</div>
</body>
</html>`;
 
 return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/articleStyle.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleStyle.css'));
});

app.get('/ui/article1.html', function (req, res) {
  res.sendFile(createTemplate(article1));
});


app.get('/ui/article2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});


app.get('/ui/pp.jpe', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pp.jpe'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
