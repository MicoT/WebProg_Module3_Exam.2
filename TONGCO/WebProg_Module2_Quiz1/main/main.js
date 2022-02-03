function goToElon() {
    location.replace("../people/elon.html")
}
function goToPew() {
    location.replace("../people/pew.html")
}
function goToBeast() {
    location.replace("../people/beast.html")
}
function goToKeanu() {
    location.replace("../people/keanu.html")
}
function goToStan() {
    location.replace("../people/stan.html")
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}