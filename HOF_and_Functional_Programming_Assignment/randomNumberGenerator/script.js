const displayResult = document.getElementById('result');
const btn = document.getElementById('btn');
const progress = document.getElementById('progress');

btn.addEventListener("click", () => {
    setTimeout(() => {
        displayResult.innerText = Math.floor(Math.random() * 100);
        progress.style.display = "none";
    }, 3000)
    displayResult.innerText = "";
    progress.style.display = "block";
});







// **************dark mode***************
document.querySelector('#dark-icon').addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.className == "dark-theme") {
        document.querySelector('#dark-icon').innerText = "Light Mode";
    } else {
        document.querySelector('#dark-icon').innerText = "Dark Mode";
    }
});