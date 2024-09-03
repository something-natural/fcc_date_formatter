const selectVal = document.getElementById('date-options');
const curDate = document.getElementById('current-date');

function displayDate(){
    const date = new Date();
    const YYYY = date.getFullYear();
    const MM = date.getMonth() + 1  ; // you should +1 since month start from 0 
    const DD = date.getDay();    
    const hh = date.getHours();
    const mm = date.getMinutes();    
    
    const parsedDate = `${DD}-${MM}-${YYYY}`
    
    switch (selectVal.value){
        case 'yyyy-mm-dd' :
            console.log('yyyy')
            curDate.innerText = parsedDate.split("-")
                .reverse()
                .join("-")
            break;   // don't forge add break when using switch block
        case 'mm-dd-yyyy-h-mm' :
            console.log('mm-dd')
            curDate.innerText = `${MM}-${DD}-${YYYY} ${hh} Hours ${mm} Minutes`          
            break;
        default:
            console.log('dd-mm')
            curDate.innerText = parsedDate            
    }            
    
}

selectVal.addEventListener("change", displayDate);

