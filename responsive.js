const menu = document.querySelector(".menu")
const navheader = document.querySelector(".navheader")

menu.addEventListener("click", function() {
    if (navheader.style.display === "none") {
        navheader.style.display = "block"; 
    } else {
            navheader.style.display = "none";
        }   
});

