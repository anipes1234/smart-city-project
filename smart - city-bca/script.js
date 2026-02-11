// Digital Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleString();
}
setInterval(updateClock, 1000);

// Traffic Control
function changeTraffic() {
    const levels = ["🟢 Low", "🟡 Moderate", "🔴 Heavy"];
    let random = levels[Math.floor(Math.random() * levels.length)];
    document.getElementById("traffic").innerText = random;
}

// Street Light
let light = false;

function toggleLight() {
    light = !light;
    document.getElementById("lightStatus").innerText = light ? "Light ON" : "Light OFF";
}

// Waste Management
function updateWaste() {
    let level = Math.floor(Math.random() * 100);
    document.getElementById("wasteLevel").innerText = level + "% Full";
}

// Energy Usage
function updateEnergy() {
    let usage = Math.floor(Math.random() * 100);
    let bar = document.getElementById("energyBar");
    bar.style.width = usage + "%";

    if (usage < 50) {
        bar.style.background = "green";
    } else if (usage < 80) {
        bar.style.background = "orange";
    } else {
        bar.style.background = "red";
    }
}

// Emergency
function showAlert() {
    alert("🚨 Emergency Activated! Authorities Notified.");
}