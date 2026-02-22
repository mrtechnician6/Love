// The birthday date for the password and reveal
const birthdayPassword = "2060-12-26"; 

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const music = document.getElementById('bgMusic');
    
    // 1. Check if the password is correct
    if (input === birthdayPassword) {
        
        // 2. Try to play music immediately
        music.play().catch(error => {
            console.log("Autoplay prevented, but we will try again on reveal.");
        });

        // 3. Hide the password screen
        document.getElementById('password-screen').classList.add('hidden');

        // 4. LOGIC FIX: Check if we should show the countdown or the surprise
        const now = new Date();
        // For testing purposes, I have set this to check if today is the day.
        // If you want to see it NOW, we bypass the countdown check.
        
        const isItTheBigDay = true; // Set to 'true' to see the website immediately for testing

        if (!isItTheBigDay) {
            document.getElementById('countdown-screen').classList.remove('hidden');
            // runCountdown logic here...
        } else {
            showMainContent();
        }

    } else {
        alert("Enter the correct date (YYYY-MM-DD) to unlock! ❤️");
    }
}

function showMainContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden');
    
    // Smooth scroll to top
    window.scrollTo(0, 0);

    // Initialize the 20 reasons
    const reasons = [
        "Your Smile", "Your Heart", "Your Eyes", "How you care",
        "Your Support", "Your Strength", "Our Memories", "Your Kindness",
        "Your Voice", "Your Style", "Our Jokes", "Your Dreams",
        "Your Patience", "Your Hugs", "Your Soul", "Your Energy",
        "Your Wisdom", "Your Beauty", "Our Future", "Just YOU"
    ];
    
    const grid = document.getElementById('reasonsGrid');
    grid.innerHTML = ''; // Clear existing
    
    reasons.forEach((r, i) => {
        const card = document.createElement('div');
        card.className = 'reason-box';
        card.innerHTML = `<span>${i+1}</span>`;
        card.onclick = () => alert(`Reason #${i+1}: ${r}`);
        grid.appendChild(card);
    });
}
