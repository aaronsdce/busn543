// Event Date and Time
const eventDate = new Date("December 15, 2024 19:00:00").getTime();

// Countdown function
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "The event has started!";
    }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);
