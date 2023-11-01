// Define a function to handle smooth scrolling for anchor links in the navigation bar
function smoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetTop = targetSection.offsetTop;

            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
}
const viewResumeBtn = document.getElementById("viewResumeBtn");
    const resumeIframeContainer = document.getElementById("resumeIframeContainer");

    viewResumeBtn.addEventListener("click", function() {
        // Show the iframe container and hide the button
        resumeIframeContainer.style.display = "block";
        viewResumeBtn.style.display = "none";
    });
// Function to show/hide the navigation bar on scroll
function toggleNavbar() {
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolling');
        } else {
            navbar.classList.remove('scrolling');
        }
    });
}

// Add event listeners when the page loads
window.addEventListener('load', function() {
    smoothScrolling(); // Enable smooth scrolling for anchor links
    toggleNavbar(); // Show/hide the navigation bar on scroll
});
document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".skill-item");

    function animateSkills() {
        skillItems.forEach((item, index) => {
            setTimeout(function () {
                item.classList.add("active");
            }, 200 * index);
        });
    }

    animateSkills();
});
