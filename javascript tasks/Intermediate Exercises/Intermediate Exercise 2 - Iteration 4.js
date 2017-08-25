function divideByThree() {
    var count = 0;
    var k = document.getElementById("number").value;
    do {
        if (k%3===0) {
            k /= 3;
        } else if ((k+1)%3===0) {
            k++;
        } else if ((k-1)%3===0) {
            k--;
        }
        count++;
    } while (k>1);
    alert("The iteration took " + count + " steps to reach " + k);
}