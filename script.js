const selectVal = document.getElementById('date-options');
const curDate = document.getElementById('current-date');

function displayDate(){
    console.log("meow");
    curDate.innerText = selectVal.value
}

selectVal.addEventListener("change", displayDate);

