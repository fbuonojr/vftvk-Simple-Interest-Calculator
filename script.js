//this function is used to update the rate displayed as the user moves the slider
function updateRate() {
    //this variable grabs rate from html dom
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
//this function computes the interest after the button is clicked 
function compute() {
    //these variables are for all of the html sections we need access to values of
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    //if block ensures principal is positive
    if (principal <= 0) {
        document.getElementById("result").innerHTML = "Enter a positive principal";
        principal.focus();
        principal.scrollIntoView();
    }
    else {
        document.getElementById("result").innerHTML = "If you deposit " + principal +
            ",\<br\>at an interest rate of " + rate +
            "%\<br\>You will receive an amount of " + interest +
            ",\<br\>in the year " + year + "\<br\>";
    }
}
