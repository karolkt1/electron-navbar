const { ipcRenderer } = require('electron')

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await ipcRenderer.invoke('dark-mode:toggle')
    if (isDarkMode) {
        document.getElementById("toggle-dark-mode").classList.remove('btn-dark');
        document.getElementById("toggle-dark-mode").classList.add('btn-light');
        document.getElementById("navbar").classList.remove('bg-light');
        document.getElementById("navbar").classList.remove('navbar-light');
        document.getElementById("navbar").classList.add('bg-dark');
        document.getElementById("navbar").classList.add('navbar-dark');

    } else {
        document.getElementById("toggle-dark-mode").classList.remove('btn-light');
        document.getElementById("toggle-dark-mode").classList.add('btn-dark');
        document.getElementById("navbar").classList.remove('bg-dark');
        document.getElementById("navbar").classList.remove('navbar-dark');
        document.getElementById("navbar").classList.add('bg-light');
        document.getElementById("navbar").classList.add('navbar-light');
    }
})

function clearBody() {
    let body = document.getElementById("body");
    body.innerHTML = null;
}

// clearBody();
