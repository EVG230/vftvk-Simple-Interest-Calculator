
function compute() {
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100;

    //Convert "No of Years" into the actual year in the future   
    years_in_future = new Date().getFullYear() + parseInt(years);

    //Wrong imput check
    if (principal < 1) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit " + "<mark>" + principal + "</mark>" + "," + "</br>" + "at an interest rate of " + "<mark>" + rate + "%.</mark>" + "</br>" + " You will recive an amount of " + "<mark>" + interest.toFixed(2) + "</mark>" + "," + "</br>" + " in the year " + "<mark>" + years_in_future + "</mark>";
    }

}

    //Slider Update
function updateSlider(sliderAmount) {
    var sliderSpan = document.getElementById("sliderAmount");
    sliderSpan.innerHTML = sliderAmount + "%";
}


