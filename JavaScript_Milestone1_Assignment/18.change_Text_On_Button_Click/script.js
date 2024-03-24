function toggleHeading() {
  const heading = document.getElementById("heading");
  if (heading.textContent === "The most affordable learning platform") {
    heading.textContent = "PW SKILLS";
  } 
  else {
    heading.textContent = "The most affordable learning platform";
  }
};