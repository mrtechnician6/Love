const secretDate = "2060-12-26";

// The 20 Perfect Reasons
const loveReasons = [
    "Your unconditional support for my dreams and NK Digital.",
    "The way your laugh brightens even my darkest days.",
    "Your incredible strength and the grace you carry.",
    "The way you look at me when you think I don't notice.",
    "Your kindness towards every soul you meet.",
    "The way being with you feels like my true 'Home'.",
    "Your ambition that inspires me to work harder every day.",
    "Our silly inside jokes that only we understand.",
    "Your endless patience when I'm being difficult.",
    "The beautiful light you carry within your soul.",
    "The way you say my name—it's my favorite sound.",
    "Your brilliant mind and the way you think about the world.",
    "How you always choose love over being right.",
    "The fact that you make me a better person every single day.",
    "Your unique style and the spark that is only yours.",
    "Your unwavering faith in 'Us' and our future.",
    "Your hugs—they are my ultimate recharge and safe haven.",
    "The beautiful life I see ahead of us whenever I look at you.",
    "How authentic and real you are in a world of templates.",
    "Simply because you are YOU, and I am the luckiest to have you."
];

function unlock() {
    const input = document.getElementById('passInput').value;
    const music = document.getElementById('bgMusic');
    
    if (input === secretDate) {
        // Play the music: 🤍🩵🩷 _newzealand(MP3).mp3
        music.play().catch(e => console.log("Music play pending interaction"));

        const screen = document.getElementById('password-screen');
        screen.style.opacity = '0';
        screen.style.transition = '1s';
        
        setTimeout(() => {
            screen.classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            generateReasons();
            triggerConfetti(); // Bonus animation effect
        }, 1000);
    } else {
        alert("Enter the correct date (YYYY-MM-DD) to unlock! ❤️");
    }
}

function generateReasons() {
    const grid = document.getElementById('reasonsGrid');
    grid.innerHTML = ''; 
    
    loveReasons.forEach((text, i) => {
        const div = document.createElement('div');
        div.className = 'box animate-pop';
        // Using a Heart Icon for each box
        div.innerHTML = `
            <div class="icon-content">
                <span class="heart-icon">❤️</span>
                <span class="reason-number">${i + 1}</span>
            </div>
        `;
        
        div.onclick = () => showLoveModal(text, i + 1);
        grid.appendChild(div);
    });
}

// Function to show a beautiful popup instead of a boring alert
function showLoveModal(text, number) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'love-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Reason #${number}</h3>
            <p>${text}</p>
            <button onclick="this.parentElement.parentElement.remove()">Close with Love</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Simple Confetti Effect
function triggerConfetti() {
    console.log("Birthday magic started!");
    // You can add a confetti library link in HTML for more flare
}
