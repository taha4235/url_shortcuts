function getShortcut() {

    const url = document.getElementById("url-input").value;

    if (!isUrl(url)) {
        document.getElementById("error-message").innerHTML = "Invalid URL";
        return;
    }

    const shortcut = `<a href="${url}" target="_blank">${url}</a>`;
    document.getElementById("shortcut-container").innerHTML = shortcut;
    const image = `<img src="https://api.screenshotmachine.com/?key=82dbc5&url=${encodeURIComponent(url)}&dimension=1024x768">`;
    document.getElementById("image-container").innerHTML = image;
    document.getElementById("error-message").innerHTML = "";
}

function isUrl(str) {
    const pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return pattern.test(str);
}