const firstColor = document.getElementById("first-color");
const secondColor = document.getElementById("second-color");
const result = document.getElementById("result");

const btn = document.getElementById("btn");

function mixColor() {
  const newColor = firstColor.value + secondColor.value;

  switch (newColor) {
    case "redblue":
      result.style.background = "purple";
      break;

    case "bluered":
      result.style.background = "purple";
      break;
    case "redyellow":
      result.style.background = "orange";
      break;

    case "yellowred":
      result.style.background = "orange";
      break;

    case "blueyellow":
      result.style.background = "green";
      break;

    case "yellowblue":
      result.style.background = "green";
      break;

    default:
      alert("invalid color combination");
      break;
  }
}

btn.addEventListener("click", mixColor);