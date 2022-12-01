var mobileMenu = document.getElementById("mobile-menu")
var menuBackground = document.getElementById("mobile-background")
var expandedHeader = document.getElementById("expanded-header")
var menuBtn = document.getElementById("menu")
var xBtn = document.getElementById("x-btn")






menuBtn.onclick = function() {
    mobileMenu.removeAttribute("hidden")
    menuBackground.removeAttribute("hidden")
}

xBtn.onclick = function() {
    mobileMenu.setAttribute("hidden", "hidden")
    menuBackground.setAttribute("hidden", "hidden")
}




// function menuWidth() {
//     if (screen.width >= 1440) {
//         var menu = document.getElementById("")
//     } 
// }