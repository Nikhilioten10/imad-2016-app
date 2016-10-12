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
                var info = request.responseText;
                var container = document.getElementById('main-text');
                container.innerHTML = info.toString();
            }
        }
        
    };
    
 a1Request.open('GET',"http://nikhilioten10.imad.hasura-app.io/ui/article1.html",true);
 a1Request.send(null);

    
};

