function calcHighestMarks() {
  // get input value
  let firstMarks = document.getElementById("first-marks").value;
  let secondMarks = document.getElementById("second-marks").value;
  let thirdMarks = document.getElementById("third-marks").value;
  let fourthMarks = document.getElementById("fourth-marks").value;
  let fifthMarks = document.getElementById("fifth-marks").value;

  // convert values to number
  firstMarks = parseInt(firstMarks);
  secondMarks = parseInt(secondMarks);
  thirdMarks = parseInt(thirdMarks);
  fourthMarks = parseInt(fourthMarks);
  fifthMarks = parseInt(fifthMarks);
  // calculate highest marks
  let marks = new Array();
  marks.push(firstMarks);
  marks.push(secondMarks);
  marks.push(thirdMarks);
  marks.push(fourthMarks);
  marks.push(fifthMarks);

  let highest = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }
  // display result
  document.getElementById("result").innerText = highest;
}