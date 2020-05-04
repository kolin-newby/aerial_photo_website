function navFunction(){
  var x = document.getElementById("main_navbar");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
  // console.log('nav_test')
}

function navCollapse(){
	var x = document.getElementById("main_navbar");
	x.className = "menu";
}