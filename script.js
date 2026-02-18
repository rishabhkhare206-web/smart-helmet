// DOM Elements selection
const demoBtn = document.getElementById('demoBtn');
const hudScreen = document.getElementById('hudScreen');
const speedElement = document.getElementById('speed');
const rpmElement = document.getElementById('rpm');
const clockElement = document.getElementById('clock');

let isHudActive = false;
let simulationInterval;

// 1. HUD Toggle Function
demoBtn.addEventListener('click', () => {
    if (!isHudActive) {
        startSimulation();
    } else {
        stopSimulation();
    }
});

function startSimulation() {
    isHudActive = true;
    hudScreen.classList.add('hud-active'); // CSS class add karega
    demoBtn.innerText = "Stop System";
    demoBtn.style.backgroundColor = "red";
    demoBtn.style.color = "white";
    demoBtn.style.borderColor = "red";

    // Speed aur RPM simulate karna shuru karo
    let currentSpeed = 0;
    
    simulationInterval = setInterval(() => {
        // Random speed generation logic (0 to 140 km/h)
        const randomFluctuation = Math.floor(Math.random() * 5) - 2; // -2 to +2
        currentSpeed += randomFluctuation;

        // Limits set karna
        if (currentSpeed < 0) currentSpeed = 0;
        if (currentSpeed > 140) currentSpeed = 140;

        // RPM calculation based on speed
        let rpm = (currentSpeed * 0.05) + (Math.random() * 0.2);
        
        // Update DOM
        speedElement.innerText = currentSpeed;
        rpmElement.innerText = rpm.toFixed(1); // 1 decimal place

        updateTime();

    }, 100); // Har 100ms mein update hoga
}

function stopSimulation() {
    isHudActive = false;
    hudScreen.classList.remove('hud-active');
    demoBtn.innerText = "Run HUD Demo";
    
    // Reset Style
    demoBtn.style.backgroundColor = "transparent";
    demoBtn.style.color = "#00f3ff";
    demoBtn.style.borderColor = "#00f3ff";

    // Interval band karo
    clearInterval(simulationInterval);
    
    // Values reset karo
    speedElement.innerText = "0";
    rpmElement.innerText = "0";
}

// 2. Clock Update Function
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 ko 12 banana
    minutes = minutes < 10 ? '0'+minutes : minutes;
    
    clockElement.innerText = `${hours}:${minutes} ${ampm}`;
}

// 3. Simple Pre-order Alert
function preOrder() {
    alert("Thanks! You are added to the Synapse X1 waitlist.");
}