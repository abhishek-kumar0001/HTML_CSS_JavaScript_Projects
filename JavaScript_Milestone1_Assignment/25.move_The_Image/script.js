// Select the image element
const image = document.querySelector("#my-image");

// Set initial position
let x = 0;
let y = 0;

// Define the function to move the image
function moveImage(xOffset, yOffset) {
  x += xOffset;
  y += yOffset;
  image.style.transform = `translate(${x}px, ${y}px)`;
}

// Add an event listener to detect key presses
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      moveImage(0, -10); // Move up
      break;
    case "ArrowDown":
      moveImage(0, 10); // Move down
      break;
    case "ArrowLeft":
      moveImage(-10, 0); // Move left
      break;
    case "ArrowRight":
      moveImage(10, 0); // Move right
      break;
  }
});