const secretDate = "2060-12-26";

const loveReasons = [
    "Your unconditional support makes me believe in every dream I chase.",
    "Your laugh is my favorite song, and I never want it to stop playing.",
    "I love how you handle every challenge with such grace and strength.",
    "The way you look at me makes me feel like the luckiest person alive.",
    "Your kindness to everyone you meet shows how beautiful your soul is.",
    "Being with you feels like 'Home,' no matter where we actually are.",
    "Your ambition and drive inspire me to be the best version of myself.",
    "Our inside jokes are the highlights of my day—no one gets me like you.",
    "I love your endless patience, even when I'm being difficult.",
    "You carry a light within you that brightens up my entire world.",
    "The way you say my name is a sound I could listen to forever.",
    "I am constantly in awe of your brilliant mind and how you think.",
    "You always choose love and kindness over being right, and I admire that.",
    "Every single day, you make me a better person just by being in my life.",
    "Your unique style and spark are things no one else could ever replicate.",
    "Your unwavering faith in 'Us' gives me so much peace and security.",
    "Your hugs are my ultimate recharge—they make all my stress vanish.",
    "When I look at my future, the only thing I see clearly is you.",
    "You are the most authentic and real soul I have ever known.",
    "I love you simply because you are you, and you are my everything."
];

function unlock() {
    const input = document.getElementById('passInput').value;
    const music = document.getElementById('bgMusic');
    
    if (input === secretDate) {
        music.play();
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        generateReasons();
    } else {
        alert("Enter the correct date (YYYY-MM-DD) to unlock! ❤️");
    }
}

function generateReasons() {
    const grid = document.getElementById('reasonsGrid');
    grid.innerHTML = ''; 
    
    loveReasons.forEach((text, i) => {
        const div = document.createElement('div');
        div.className = 'reason-card animate-pop';
        div.innerHTML = `
            <div class="card-inner">
                <span class="heart-icon">❤️</span>
                <p class="reason-text">${text}</p>
            </div>
        `;
        grid.appendChild(div);
    });
}
