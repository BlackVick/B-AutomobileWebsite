var sideNav = document.getElementById("sideNav");
var menuBtn = document.getElementById("menuBtn");
var menuIcon = document.getElementById("menuIcon");

//default side nave
sideNav.style.right = "-250px";

//menu click
menuIcon.onclick = () => {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0px";
    menuIcon.className = "fas fa-times";
  } else {
    sideNav.style.right = "-250px";
    menuIcon.className = "fas fa-bars";
  }
};
