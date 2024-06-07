function myFunction() {
alert("test my function ")
}

document.addEventListener('click', function(event) {
    alert("document was clicked");
}); 

let btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    alert("button was clicked");
}   );

red = document.getElementById('red');
green = document.getElementById('green');
blue = document.getElementById('blue');

div = document.querySelector('div');
div.style.backgroundColor = "black";
div.style.color = "white";
div.style.justifyContent = "none";
div.style.textAlign = "none";

red.addEventListener('click', function(event) {
    div.style.backgroundColor = "red";
}   );

green.addEventListener('click', function(event) {
    div.style.backgroundColor = "green";
}
);
blue.addEventListener('click', function(event) {
    div.style.backgroundColor = "darkblue";
}   );

button = document.querySelector('button');
button.addEventListener('click', function(event) {
if(event.button ==0){
    alert("left button was clicked");
}
else if(event.button ==1){
    alert("middle button was clicked");
}
else if(event.button ==2){
    alert("right button was clicked");
}
}   );