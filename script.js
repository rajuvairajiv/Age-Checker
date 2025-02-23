document
    .getElementById("checkButton")
    .addEventListener("click", function () {
        const resultDiv = document.getElementById("result");
        const resulDiv = document.getElementById("resultDiv");
        const ageValue = parseInt(document.getElementById("ageinput").value);

        resultDiv.innerHTML = "";

        if (isNaN(ageValue) || ageValue <= 0 || ageValue >= 100) {
            resultDiv.innerHTML = "Please Enter a valid Age";
            resulDiv.innerHTML = "<h3>You are Extra-Ordinary that you are still Alive, go get some rest</h3>";
            return;

        }



        // if (ageValue >= 100) {
        //     resulDiv.innerHTML = "You are Extra-Ordinary that you are still Alive, go get some rest"
        // }

        // Clear only when input is valid

        if (ageValue >= 10) {
            resultDiv.innerHTML += "You are eligible to vote </br>";
        } else {
            resultDiv.innerHTML += "You are not eligible to vote </br>";
        }

        if (ageValue >= 21) {
            resultDiv.innerHTML += "You are eligible to drink Alcohol </br>";
        } else {
            resultDiv.innerHTML += "You are not eligible to drink Alcohol </br>";
        }

        if (ageValue >= 16) {
            resultDiv.innerHTML += "You are eligible to drive </br>";
        } else {
            resultDiv.innerHTML += "You are not eligible to drive </br>";
        }


    });

document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("ageinput").value = ""; // Clear input field
    document.getElementById("result").innerHTML = ""; // Clear result text
    document.getElementById("resultDiv").innerHTML = "Hello"; // Clear result text
});
