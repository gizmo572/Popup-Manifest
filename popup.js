let startButton = document.getElementById('start');
let googleButton = document.getElementById('google');
let gptButton = document.getElementById('chatGPT');


startButton.addEventListener('click', function() {
    console.log('hey');
    chrome.storage.local.set({ discordPopup: true })
    // setInterval(() => chrome.storage.local.set({ discordPopup: false }), 1000)
});

googleButton.addEventListener('click', function() {
    console.log('hey');
    chrome.storage.local.set({ googlePopup: true })
    // setInterval(() => chrome.storage.local.set({ discordPopup: false }), 1000)
});

gptButton.addEventListener('click', function() {
    console.log('hey');
    chrome.storage.local.set({ chatGPT: true })
    // setInterval(() => chrome.storage.local.set({ discordPopup: false }), 1000)
});