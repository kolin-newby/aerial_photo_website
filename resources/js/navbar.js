function navfunction(){
	var x = document.getElementById("nav_bar");
	if (x.className === "navbar"){
		x.className += " responsive";
	}
	else{
		x.className = "navbar";
	}
}