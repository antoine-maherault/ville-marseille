
// TOPNAV //

function myFunction() {

  var x = document.getElementById("ham");
  if (x.className === "ham_container") {
    x.className += " responsive";
  } else {
    x.className = "ham_container";
  }
}

// SCROLL //

myID = document.getElementById("icon_arrow");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 800) {
    document.getElementById("icon_arrow").style.display = "none";
  } else {
    document.getElementById("icon_arrow").style.display = "flex";
  }
};

window.addEventListener("scroll", myScrollFunc);


// ________________ News ________________ //

// Opacity //

document.getElementById("three").style.opacity = "0.6";


