document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const articles = document.querySelectorAll('.articles article');
    
    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        if (title.includes(term)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
});

// Get the header element
const header = document.getElementById('header');

// Array of background images (GIFs or static images)
const backgrounds = [
    'background1.gif', // First GIF
    'background2.gif'  // Second Image (can be a GIF or image)
];

let currentBackground = 0;

// Function to change the background
function changeBackground() {
    currentBackground = (currentBackground + 1) % backgrounds.length; // Cycle through the backgrounds
    header.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
}

// Set the interval to change the background every 5 seconds (5000 ms)
setInterval(changeBackground, 4000);