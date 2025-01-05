// Smooth Scrolling
window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Toggle Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dynamic Project Cards (Optional Example for Future Integration)
const projects = [
    {
        title: "TheGYM",
        description: "A gym management application built with Java, JSP, and MySQL.",
        image: "images/project1.jpg",
        link: "#"
    },
    {
        title: "PrintFleet Solutions",
        description: "A fleet management solution using Angular and Spring Boot.",
        image: "images/project2.jpg",
        link: "#"
    },
    {
        title: "Hiding Message in Image",
        description: "Python project for hiding messages within images using encryption.",
        image: "images/project3.jpg",
        link: "#"
    }
];

const projectContainer = document.querySelector('#projects .row');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('col-md-4', 'mb-4');
    projectCard.innerHTML = `
        <div class="card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary">View Project</a>
            </div>
        </div>
    `;
    projectContainer.appendChild(projectCard);
});
