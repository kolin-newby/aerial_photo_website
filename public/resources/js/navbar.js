function navFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function navCollapse(){
	var x = document.getElementById("myTopnav");
	x.className = "topnav";
}