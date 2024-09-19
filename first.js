let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // If 12-hour format is active
    if (!is24HourFormat) {
        hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    }
    hours = String(hours).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock(); // Update the clock immediately after toggling
}

setInterval(updateClock, 1000);
updateClock();
