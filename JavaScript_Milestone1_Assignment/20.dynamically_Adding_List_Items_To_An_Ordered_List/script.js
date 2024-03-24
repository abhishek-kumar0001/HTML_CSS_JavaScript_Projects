const items = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];

let counter = 0;
let deleteBtn = document.getElementById("delete-btn");
let addBtn = document.getElementById("add-btn");
let ul = document.getElementById("list");

addBtn.onclick = () => {
  if (counter < items.length) {
    let listItem = document.createElement("li");
    listItem.innerText = items[counter];
    ul.appendChild(listItem);
    counter++;

  } else {
    alert("All items have been added!");
  }
};

deleteBtn.onclick = () => {
  list.removeChild(list.lastChild);
  counter--;
};