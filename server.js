var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
 articleOne : {
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
},

 articleTwo: {
    heading:'ARTICLE TWO', 
    date: 'DATE : september 23, 2016.',
    content: 
    `<p>
	Fire in the heart.Fire in the heart..Fire in the heart.Fire in the heart.
	</p>`
}};
function createTemplate(data)
{
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate = `
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
</div>`;
 
 return htmlTemplate;
}

var counter = 0;
 app.get('/counter',function (req, res){
     counter=counter+1;
     res.send(counter.toString());
 });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/background-img.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'background-img.jpg'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/n.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'n,ico'));
});

app.get('/ui/articleStyle.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleStyle.css'));
});

var string = 'nikhil';

app.get('/ui/article1.html', function (req, res) {
  res.send(string);
});


app.get('/ui/article2.html', function (req, res) {
  res.send(createTemplate(articles.articleTwo));
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
