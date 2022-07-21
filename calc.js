function calculate(){
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    //var bmiClass = document.getElementById("bmiClass").value;


    var bmi = w / (h*h);

    document.getElementById("bmi").value = Math.round(bmi * 100)/100;

    if(bmi<="18.5"){
        document.getElementById("bmiClass").value = "You are Underweight";
    }
    if(bmi>"18.5" && bmi <= "24.9"){
        document.getElementById("bmiClass").value = "You have Normal Weight";
    }
    if(bmi>"24.9"){
        document.getElementById("bmiClass").value = "You are Overweight";
    }

    console.log(bmi);



}