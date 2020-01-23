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

function contactCollapse(){
	var x = document.getElementById("contactCollapse");
	x.addEventListener("click", function(){
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if(content.style.display === "block") {
			content.style.display = "none";
		}
		else{
			content.style.display = "block";
		}
	});
}