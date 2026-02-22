const birthday = "2060-12-26";

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const music = document.getElementById('bgMusic');
    
    if (input === birthday) {
        document.getElementById('password-screen').classList.add('hidden');
        music.play(); // Starts music on unlock
        startExperience();
    } else {
        alert("Hint: It's the best day of the year! (YYYY-MM-DD)");
    }
}

function startExperience() {
    const now = new Date();
    const bdayDate = new Date("2060-12-26T00:00:00");

    if (now < bdayDate) {
        document.getElementById('countdown-screen').classList.remove('hidden');
        updateCountdown(bdayDate);
    } else {
        document.getElementById('main-content').classList.remove('hidden');
        initReasons();
    }
}

function updateCountdown(target) {
    setInterval(() => {
        const now = new Date().getTime();
        const dist = target - now;
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);
        document.getElementById('timer').innerHTML = `${h}h ${m}m ${s}s`;
        if (dist < 0) location.reload(); 
    }, 1000);
}

function initReasons() {
    const reasons = [
        "Your smile", "Your kindness", "How you handle me", "Your laugh",
        "Your support", "Your style", "Your dreams", "Your patience",
        "The way you look at me", "Your cooking", "Your ambition", "Your hugs",
        "Our late night talks", "Your focus", "The way you say my name", "Your wisdom",
        "Your strength", "The way you dance", "Your soul", "Our future"
    ];
    
    const grid = document.getElementById('grid');
    reasons.forEach((text, i) => {
        let div = document.createElement('div');
        div.className = 'reason-card';
        div.innerHTML = `<h3>${i+1}</h3><p class="hidden-text">${text}</p>`;
        div.onclick = () => alert(text);
        grid.appendChild(div);
    });
          }
