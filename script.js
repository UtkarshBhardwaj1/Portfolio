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
// resume section 
document.getElementById("viewResumeBtn").addEventListener("click", function() {
    var resumeIframe = document.getElementById("resumeIframe");
    var iframeContainer = document.querySelector(".iframe-container");

    if (iframeContainer.style.display === "none") {
        iframeContainer.style.display = "block";
        resumeIframe.src = "Utkarsh_resume.pdf"; // Set the PDF file path
    } else {
        iframeContainer.style.display = "none";
    }
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
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}