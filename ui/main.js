console.log('Loaded!');
var img = document.getElementById('img');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft;
}
img.onclick = function()
{
  var intervaal = setInterval(moveRight ,100);
};