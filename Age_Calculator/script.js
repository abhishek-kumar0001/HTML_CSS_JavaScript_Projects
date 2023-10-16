let months = [31,28,31,30,31,30,31,31,30,31,30,31];
const calculate = document.getElementById('calculate');
calculate.addEventListener('click',(e)=>{
    let today = new Date();
    let dateEnter = document.getElementById('dob')
    let DOB = new Date(dateEnter.value);
    let birthYear,birthMonth,birthDate;
    let birthDetails = {
        year: DOB.getFullYear(),
        month: DOB.getMonth()+1,
        date: DOB.getDate()
    }
    console.log(birthDetails.date);
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(dateEnter.value == "")
    {
        alert("Please! Enter DOB.")
        return;
    }

    if(birthDetails.year > currentYear || (birthDetails.year == currentYear && birthDetails.month > currentMonth) || (birthDetails.year == currentYear &&birthDetails.month == currentMonth && birthDetails.date > currentDate)
    )
    {
        alert("Not Born Yet !");
        return;
    }

    //calculate age
    birthYear = currentYear - birthDetails.year;
    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else
    {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }
    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else
    {
        birthMonth--;
        let days = months[currentMonth - 2]
        birthDate = days + currentDate - birthDetails.date;
    }

    //display value
    display(birthYear,birthMonth,birthDate);

    //reset value
    const reset = document.getElementById('reset');
    reset.addEventListener('click',(e)=>{
        getReset(dateEnter);
    })
    
})

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0))
    {
        months[1] = 29;
    }
}
function display (bYear,bMonth,bDate){
    document.querySelector('#year').textContent = bYear;
    document.querySelector('#month').textContent = bMonth;
    document.querySelector('#days').textContent = bDate;
}
function getReset(dateEnter){
    document.querySelectorAll('.value').forEach((value)=>{
        value.textContent = "-";
    })
       dateEnter.value = "";
}


