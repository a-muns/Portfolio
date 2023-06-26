// Add event listener to each href in the hamburger menu
// to close the menu on click
const hamburgerLinks = document.querySelectorAll(".hamburger-btn");

hamburgerLinks.forEach(item => item.addEventListener("click", hideHamburger));

function hideHamburger() {
    document.querySelector("#hamburger-input").checked = false;
    console.log("clicked");
}