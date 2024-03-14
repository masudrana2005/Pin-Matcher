
// pin generator
function generatePin(){
    var random = Math.round(Math.random()*8999+1000);
    return random;
}
generatePin();

document.getElementById("generate-pin").addEventListener("click", function(){
    var displayPin = document.getElementById("display-pin");
    displayPin.value = generatePin();
})

// Add display
function addToDisplay(value){
    document.getElementById("typedPin").value += value;
}

// clear display
function clearDisplay(){
    document.getElementById("typedPin").value = "";
}

// last input remove
function lastInputRemove(){
    document.getElementById("typedPin").value = typedPin.value.slice(0, -1);
}

// verify pin
document.getElementById("verify-pin").addEventListener("click", function(){
    var displayPinField = document.getElementById("display-pin");
    var currentPin = displayPinField.value;
    // console.log(currentPin);

    var typedPinField = document.getElementById("typedPin");
    var typedPin = typedPinField.value;
    // console.log(typePin);

    var pinSuccessMessage = document.getElementById("pin-success");
    var pinFailureMessage = document.getElementById("pin-failure");

    if( currentPin === typedPin){
        pinSuccessMessage.style.display = "block";
        pinFailureMessage.style.display = "none";
    }
    else{
        pinFailureMessage.style.display = "block";
        pinSuccessMessage.style.display = "none";
    }
})