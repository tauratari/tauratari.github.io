/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function header() {
  var x = document.getElementById("mainmenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}