const volumeDisplay = document.querySelector('.volume-display');
const volumeButtons = document.querySelectorAll('.volume-buttons button');

let volume = 0;

volumeButtons.forEach(button =>