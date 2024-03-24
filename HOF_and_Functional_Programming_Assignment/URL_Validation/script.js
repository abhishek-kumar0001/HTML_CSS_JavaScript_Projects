const btn = document.getElementById('btn');

const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

function checkUrlValidity() {
    const url = document.getElementById('url').value;
    if (urlRegex.test(url)) {
        alert(`${url} is a valid URL.`);
    } else {
        alert(`${url} is not a valid URL.`);
    }
}

btn.addEventListener("click", checkUrlValidity)