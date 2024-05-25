// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".skills-container ul li img");
    
    icons.forEach(icon => {
        icon.addEventListener("mouseover", function() {
            const altText = this.getAttribute('alt');
            const iconDescription = this.parentElement.querySelector('.icon-description');
            iconDescription.textContent = altText;
        });

        icon.addEventListener("mouseout", function() {
            const iconDescription = this.parentElement.querySelector('.icon-description');
            iconDescription.textContent = "";
        });
    });
});

// Open Popup
function openPopup(projectId) {
    document.getElementById(projectId).style.display = 'block';
}

// Close Popup
function closePopup(projectId) {
    document.getElementById(projectId).style.display = 'none';
}

// Close Popup when clicking outside of the popup content
window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}

