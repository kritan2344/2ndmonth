document.addEventListener("DOMContentLoaded", () => {
    const fallingFlowers = document.getElementById("falling-flowers");

    // Falling Flowers Effect
    function createFlower() {
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
        flower.style.animationDuration = 4 + Math.random() * 3 + "s"; // Random fall duration
        flower.style.width = flower.style.height = 10 + Math.random() * 20 + "px"; // Random size
        flower.style.background = `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8), #add8e6)`;
        fallingFlowers.appendChild(flower);

        setTimeout(() => {
            flower.remove(); // Remove flower after animation ends
        }, 7000); // Adjust timing to match animation
    }

    setInterval(createFlower, 300); // Create a flower every 300ms

    // Display Romantic Quotes
    displayLoveQuotes();

    // RGB Audio Visualizer for Songs
    setupVisualizer();
});

// Function to display romantic quotes
function displayLoveQuotes() {
    const quotes = [
        "You are my today and all of my tomorrows.",
        "Every moment with you is a treasure I will cherish forever.",
        "Love is not about how many days, months, or years we’ve been together; it’s about how much we love each other every single day.",
        "When I look into your eyes, I see the future I’ve always wanted.",
        "You make me feel like I can be the best version of myself, just by being with you.",
        "You are my favorite place to go when my mind searches for peace.",
        "Falling for you was the easiest thing I’ve ever done.",
        "In you, I’ve found my forever."
    ];

    const loveQuoteElement = document.createElement("div");
    loveQuoteElement.className = "love-quote";
    document.body.appendChild(loveQuoteElement);

    let currentQuoteIndex = 0;
    loveQuoteElement.innerHTML = quotes[currentQuoteIndex];

    setInterval(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        loveQuoteElement.innerHTML = quotes[currentQuoteIndex];
    }, 5000); // Change the quote every 5 seconds
}

function setupVisualizer() {
    const songs = document.querySelectorAll(".audio-visualizer");

    songs.forEach(song => {
        const bars = Array.from({ length: 20 }, () => {
            const bar = document.createElement("div");
            bar.className = "bar";
            song.appendChild(bar);
            return bar;
        });

        setInterval(() => {
            bars.forEach(bar => {
                const scale = Math.random() * 1.5;
                bar.style.transform = `scaleY(${scale})`;
            });
        }, 100);
    });
}
