const menu = document.querySelector(".menu")
const navheader = document.querySelector(".navheader")

menu.addEventListener("click", function() {
    if (navheader.style.display === "block") {
        navheader.style.display = "none"; 
    } else {
            navheader.style.display = "block";
        }   
});

