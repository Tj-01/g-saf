// Array of quotes
const quotes = [
    "Travel is the only thing you buy that makes you richer.",
    "The world is a book and those who do not travel read only one page.",
    "To travel is to live.",
    "Adventure is worthwhile.",
    "Traveling – it leaves you speechless, then turns you into a storyteller."
];

// Function to generate random quote
function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomNumber];
}

// Generate quote on page load
generateQuote();

let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

// Auto advance slides every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

