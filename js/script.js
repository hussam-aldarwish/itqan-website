/*!
 * Kızılay Web Tasarim Bitirme Projesi
 * HUSSAM ALDARWISH
 * +90 531 014 7060
 * hussam.aldarwish@hotmail.com
 * -----------------------------------
 */

/* Current Date
 * ------------------------------------
 */

function getCurrentDate() {
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); // OCAK 0 dır
  var yy = date.getFullYear();
  date = dd + "." + mm + "." + yy;
  return date;
}
var date = document.getElementById("date");
date.innerText = getCurrentDate();

/* offcanvas navbar
 * ------------------------------------
 */

(function () {
  "use strict";

  document
    .querySelector('[data-bs-toggle="offcanvas"]')
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();

/* sticky top navbar
 * ------------------------------------
 */

window.onscroll = function () {
  setTopValue();
};

var topbar = document.getElementById("top-bar");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var collapse = document.getElementsByClassName("offcanvas-collapse");

const totalNavbarHeight =
  Number(topbar.clientHeight) + Number(navbar.clientHeight);
collapse[0].style.top = totalNavbarHeight + "px";

function setTopValue() {
  if (window.pageYOffset >= sticky) {
    collapse[0].style.top = Number(navbar.clientHeight) + "px";
  } else {
    collapse[0].style.top = totalNavbarHeight + "px";
  }
}
