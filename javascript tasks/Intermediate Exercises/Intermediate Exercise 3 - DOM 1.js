var paragraph;
            
function createHelloWorld() {
    paragraph = document.createElement("P");
    var helloWorld = document.createTextNode("Hello World!");
    paragraph.appendChild(helloWorld);
    document.body.appendChild(paragraph);
}

function changeText() {
    paragraph.innerHTML = document.getElementById("newText").value;
}

function deleteText() {
    document.body.removeChild(paragraph);
}