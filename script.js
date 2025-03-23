function startHackerTyper() {
    document.getElementById('hacker-typer').classList.remove('hidden');
    document.getElementById('virus-screen').classList.add('hidden');
    document.fullscreenElement || document.documentElement.requestFullscreen();
}

function showVirusScreen() {
    document.getElementById('virus-screen').classList.remove('hidden');
    document.getElementById('hacker-typer').classList.add('hidden');
    document.fullscreenElement || document.documentElement.requestFullscreen();
}

function exitFullScreen() {
    document.exitFullscreen();
    document.getElementById('virus-screen').classList.add('hidden');
}

function typeCode(event) {
    const output = document.getElementById('output');
    const fakeCode = [
        "Initializing hack sequence...",
        "Bypassing firewall: 192.168.1.1",
        "Accessing mainframe...",
        "Decrypting data: 75% complete",
        "Access Denied! Retrying...",
        "Connected to server: 23.86.111.0"
    ];
    const randomLine = fakeCode[Math.floor(Math.random() * fakeCode.length)];
    output.innerText += randomLine + "\n";
    event.preventDefault();
      }
