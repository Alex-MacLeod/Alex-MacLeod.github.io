function fizzBuzz() {
    var countlength = document.getElementById("inputCount").value;
    var threeText = document.getElementById("inputThreeText").value;
    var fiveText = document.getElementById("inputFiveText").value;
    for (var i=1; i<=countlength; i++) {
        if (i%3===0) {
            document.write(threeText);
        }
        if (i%5===0) {
            document.write(fiveText);
        }
        if (i%3!==0 && i%5!==0) {
            document.write(i);
        }
        document.write("\n");
    }
}