// About tablink Begins here
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Navbar side menu open & close toggler begins here
var sideMenu = document.getElementById("sidemenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}
