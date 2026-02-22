const secretDate = "2060-12-26";

function unlock() {
   function generateReasons() {
    const reasons = [
        "Your unconditional support for my dreams.",
        "The way your laugh brightens my darkest days.",
        "Your incredible strength and grace.",
        "The way you look at me when you think I don't notice.",
        "Your kindness towards every soul you meet.",
        "The way being with you feels like 'Home'.",
        "Your ambition that pushes me to be better.",
        "Our silly inside jokes that only we understand.",
        "Your endless patience and understanding.",
        "The beautiful light you carry within your soul.",
        "The way you say my name—it's my favorite sound.",
        "Your brilliant mind and the way you think.",
        "How you choose love over everything else.",
        "The fact that you make me a better person every day.",
        "Your unique style and the spark you carry.",
        "Your unwavering faith in 'Us'.",
        "Your hugs—they are my ultimate recharge.",
        "The beautiful future I see whenever I look at you.",
        "How authentic and real you are in a fake world.",
        "Simply because you are YOU, and you are mine."
    ];

    const grid = document.getElementById('reasonsGrid');
    grid.innerHTML = ''; // Clear existing
    
    reasons.forEach((text, i) => {
        const div = document.createElement('div');
        div.className = 'box';
        div.innerHTML = `<span>${i + 1}</span>`;
        div.onclick = () => {
            // This creates a sweet popup alert for her to read
            alert(`Reason #${i + 1}: ${text} ❤️`);
        };
        grid.appendChild(div);
    });
   }
    
    const input = document.getElementById('passInput').value;
    const music = document.getElementById('bgMusic');
    
    if (input === secretDate) {
        // Start the Music
        music.play();

        // Fade out password screen
        const screen = document.getElementById('password-screen');
        screen.style.opacity = '0';
        
        setTimeout(() => {
            screen.classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            generateReasons();
        }, 1000);
    } else {
        alert("Hint: The most special date in YYYY-MM-DD format! ❤️");
    }
}

function generateReasons() {
    const reasons = [
        "Your contagious laugh", "Your kind soul", "How you support my dreams",
        "The way you look at me", "Your incredible style", "Your intelligence",
        "How you handle my moods", "Your warm hugs", "Your beautiful heart",
        "Our late-night talks", "Your cooking", "Your ambition", "Your strength",
        "Your unique perspective", "The way you say my name", "Your patience",
        "Your loyalty", "How you make me better", "Your perfect smile", "Just being YOU"
    ];

    const grid = document.getElementById('reasonsGrid');
    reasons.forEach((text, i) => {
        const div = document.createElement('div');
        div.className = 'box';
        div.innerHTML = `<span>${i + 1}</span>`;
        div.onclick = () => {
            alert(`Reason #${i + 1}: ${text}`);
        };
        grid.appendChild(div);
    });
}
