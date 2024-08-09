
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('message');
    const messageContainer = document.getElementById('messageContainer');
});
    const messages = [
        "You are doing amazing! Stay hopeful, you got this!",
        "Believe in yourself and all that you are.",
        "Every day may not be good, but there's something good in every day.",
        "You are stronger than you think.",
        "Keep going, you're making progress!",
        "Your potential is endless."
    ];

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    button.addEventListener('click', function() {
        const message = getRandomMessage();

        messageContainer.textContent = message;

        messageContainer.style.marginTop = '20px'; 
        messageContainer.style.fontSize = '50px'; 
        messageContainer.style.color = '#333'; 
    });
});
