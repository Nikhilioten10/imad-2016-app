console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick =  function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        
        if(request.readyState == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET',"http://nikhilioten10.imad.hasura-app.io/counter",true);
    request.send(null);
 
};


var button2 = document.getElementById('a1');
button2.onclick = function(){
    
    var a1Request = new XMLHttpRequest();
    
    a1Request.onreadystatechange = function(){
        
        if(a1Request.readyState == XMLHttpRequest.DONE)
        {
            if(a1Request.status == 200)
            {
                var info = a1Request.responseText;
            
                var container = document.getElementById('main-text');
                container.innerHTML = info;
            }
        }
        
    };
    
 a1Request.open('GET',"http://nikhilioten10.imad.hasura-app.io/about",true);
 a1Request.send(null);

    
};

var button3 = document.getElementById('a2');
button3.onclick = function(){
    
    var a2Request = new XMLHttpRequest();
    
    a2Request.onreadystatechange = function(){
        
        if(a2Request.readyState == XMLHttpRequest.DONE)
        {
            if(a2Request.status == 200)
            {
                var info2 = a2Request.responseText;
            
                var container2 = document.getElementById('main-text');
                container2.innerHTML = info2;
            }
        }
        
    };
    
 a2Request.open('GET',"http://nikhilioten10.imad.hasura-app.io/skills",true);
 a2Request.send(null);

    
};


var sub_button = document.getElementById('submit_btn');
sub_button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if(request.readyState == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                
                for(var i=0;i<names.length;i++)
                {
                    list+= '<li>'+names[i]+'</li>'
                }
                
                var ul = document.getElementById('nameslist');
                ul.innerHTML = list;
                var ib = document.getElementById('comments');
                ib.value ="";
            
            }
        }
        
    };
    
    var nameInput = document.getElementById('comments');
    var name = nameInput.value;
    request.open('GET',"http://nikhilioten10.imad.hasura-app.io/submit-name?name="+name,true);
    request.send(null);
    
};
