function generateTriangle() {
  const rows = document.getElementById("user-rows").value;
  
  const result = document.getElementById("result");
  result.innerHTML = "";
  
  for (let i = 1; i <= rows; i++) {
    var parent = document.createElement("div");
    for (let j = 1; j <= rows - i + 1; j++) {
      var child = document.createElement("span");
      child.innerHTML = "* ";
      parent.appendChild(child);
    }
    result.appendChild(parent);
  }
}
document.getElementById("btn").addEventListener("click", generateTriangle);