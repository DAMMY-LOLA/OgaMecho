let navToggleBtn = document.getElementById("menu-btn");
let navbar = document.getElementById("nav-list");

navToggleBtn.addEventListener("click", function(){
    if (navbar.style.display === "none") {
        navbar.style.display = "flex";
    }else {
        navbar.style.display = "none";
    } 
})  
