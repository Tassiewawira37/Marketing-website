// JavaScript code for image slider, ensure the image slides from right to left
const slider = document.getElementById('slider');
const images = slider.getElementsByTagName('img');

let index = 0;

function changeSlide() {
    images[index].style.transform = 'translateX(-100%)';
    index = (index + 1) % images.length;
    images[index].style.transform = 'translateX(0)';
}

setInterval(changeSlide, 5000); // Change slide every 5 seconds

//JS Code for the search button
// Get references to the input field and search button
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Add event listener to the search button
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    // Perform the search action here (e.g., display search results, redirect to search page, etc.)
    console.log("Performing search for:", searchTerm);
});
