function navFunction(){
  var x = document.getElementById("main_navbar");
  var bars = document.getElementById("menu bar icon");
  if (x.className === "menu") {
    x.className += " responsive";
    bars.className = "menu dropdown-icon fas fa-chevron-up";
  } else {
    x.className = "menu";
    bars.className = "menu dropdown-icon fas fa-bars";
  }
  // console.log('nav_test')
}

function navCollapse(){
	var x = document.getElementById("main_navbar");
	var bars = document.getElementById("menu bar icon");
	x.className = "menu";
	bars.className = "menu dropdown-icon fas fa-bars";
}