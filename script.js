function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = ((principal * rate * years) /100);
    let total = parseInt(principal) + interest;
    let date = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br> at an interest rate of <mark>${rate}%</mark>.<br>You will receive an amount of <mark>${total}</mark>,<br>in the year <mark>${date}</mark>`;
    console.log(`${rate} ${principal} ${years}`)
}

function updateRate(){
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}
        
function principalCheck(){
    let principal = document.getElementById("principal").value;
    if(principal <=0 ){
        alert("Enter a positive number");
    }
}