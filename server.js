var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Urls = {
 'about' : {
    heading:'ABOUT ME', 
    date: 'DATE OF BIRTH: May 23, 1997.',
    content: 
    `<p>
        In this Mordern world as new technology influences human life for every 86400 seconds, I am very much adaptive
        such technologies ,learning them as quickly as possible to be along with technology in the field of
        information technology which results me to become a quality professional.

	</p>
	<p>
	   The Technologies that i am interested are:
	   <ul>
	    <li>Big Data Analytics</li>
	    <li>Internet of Things</li>
	    <li>MEAN Stack web development</li>
	    <li>Complete java</li>
	    <li>Oracle database management</li>
	    <li>Data Sceince</li>
	   </ul>
   </p>
   <p>
   I am the member of professional organisations like IEEE, CSI where i spent my time in building good netorking with researchers, working professionals, tech enthusiasts for prosperity in my career.
   </p>`
},

 
 'skills': {
    heading:'MY SKILLS', 
    date: 'DATE : October 15, 2016.',
    content: 
    `<p>
      <h4>Tehcnical Skills</h4>
	   <ui>
	   <li>C programming</li>
	   <li>Core Java</li>
	   <li>MySql</li>
	   <li>Web technologies: Html5,Css3,JavaScript,Jquery,Angular Js,NodeJs</li>
	   <li>Android Development</li>
	   <li>Python</li>
	   </ul>
	   
	   <h4>Professional Skills</h4>
	   <ul>
	   <li>Being able to Communicate Well.</li>
	   <li>Being able to Volunteer for Organisations likw IEEE, CSI.</li>
	   <li>Being adaptive in nature.</li>
	   <li>Being able to mingle with new people as quickly.</li>
	   <li>I am a Learner, Motivator, Orator, Dominator and a Special entity in my working environment.</li>
	   </ul>
	</p>`
},

'Internships':{

 heading: 'MY INTERNSHIP EXPERIENCE',
 date: '22 july 2016 - 30 july 2016',
 content: `
  <section>
   <h4>IOT Internship</h4>
   organisation: EXPERSHUB , Industrial skill development center.<br>
   venue: JSS Academy of Technical Education.<br>
   Place : Uttarahali,BANGALORE.<br>
   State: Karnataka.<br><br>
  <article id="Experience">
   <h4>My Experience:</h4> <p>This Internship have lime lighted my self how to grow as a leader, learner and motivator in my professioanl career. This was a virtual internship conducted in an engineering college inheriting the industry environment to be able to understand requirements of IT industries.
     </p>
     <p>
        Here we were divited into twenty teams.My team name is 'IOTENS'.I was a team leader and a software engineer for
        my team. We united as a team has done a project on Home Automation in IOT which is SMAGMON - Smart Garden Monitor
     
     </p>
  </article>
  
  </section>`
},

'Contact': {
    
    heading: 'Contact and personal details',
    date: 'October 15,2016',
    content: `<p>Email:
    <ul>
    <li>Gmail:nikhilchanda2210tech@gmail.com </li>
    <li>Hotmail: chanda.nikhilkumar@hotmail.com</li>
    </ul><br>
    Mobile: 8374249824, 8374079824.<br>
    Facebook : https://www.facebook.com/nikhil.chandha<br>
    linkedin: https://in.linkedin.com/in/nikhil-chanda-656569107<br>
    Git Hub: https://github.com/Nikhilioten10<br>
    </p>`
}
    
};
function createTemplate(data)
{
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate = `
	<div>
	  <h3>
	  ${heading}</h3>
	</div>
	<div id = "date">
	   ${date}
	</div>
	<div>
	 ${content}
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


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var names= [];
app.get('/submit-name', function (req, res) { //url: submit-name?name=xxxx
  var name = req.query.name;
  names.push(name);
  
  res.send(JSON.stringify(names));
});



app.get('/:urlName', function (req, res) {
    var urlName = req.params.urlName;
  res.send(createTemplate(Urls[urlName]));
});


app.get('/ui/bBMGRPFn.jpg', function (req, res) {
    var imageName = req.params.imageName;
  res.sendFile(path.join(__dirname,'ui', 'bBMGRPFn.jpg'));
});

app.get('/ui/pp5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pp5.jpg'));
});

app.get('/ui/pp6.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pp6.jpg'));
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
