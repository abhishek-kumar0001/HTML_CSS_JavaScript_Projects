const container = document.getElementsByClassName('container');
const display = document.getElementById("display");
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons += val[Math.floor(Math.random() * 16)];
    }
    return cons;
};


// keydown
document.addEventListener("keydown", (e) => {
    randomColor();
    display.innerText = `${e.key} is keyDown`;
})

// keyup
document.addEventListener("keyup", (e) => {
    document.body.style.background = randomColor();
    display.innerText = `${e.key} is keyUp`;
})