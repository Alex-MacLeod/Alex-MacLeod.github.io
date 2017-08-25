var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
var request = new XMLHttpRequest();
                
request.open("GET", requestURL);
request.responseType = "json";
request.send();
                
request.onload = function() {
    var requestData = request.response;
                    
    var title = document.createElement("h2");
    title.textContent = requestData["squadName"];
    document.getElementsByTagName("body")[0].appendChild(title);

    var introText = document.createElement("p");
        if (requestData["active"]===true) {
            introText.textContent = `Since ${requestData.formed}, these superheroes have tirelessly upheld
            justice in ${requestData.hometown} from their base in ${requestData.secretBase}.`;
            document.getElementsByTagName("body")[0].appendChild(introText);
        }

    let x;
    for (x in requestData["members"]) {
        var memberTitle = document.createElement("h3");
        var age = document.createElement("p");
        var secretIdentity = document.createElement("p");
        var powersTitle = document.createElement("h4");
        var powers = document.createElement("p");

        memberTitle.textContent = requestData.members[x].name;
        age.textContent = `Age: ${requestData.members[x].age}`;
        secretIdentity.textContent = `Real name: ${requestData.members[x].secretIdentity}`;
        powersTitle.textContent = "Powers:";
        
        powers.textContent = "";
        requestData.members[x].powers.forEach((y) => powers.textContent += y + ", ");
        
        document.getElementsByTagName("body")[0].appendChild(memberTitle);
        document.getElementsByTagName("body")[0].appendChild(age);
        document.getElementsByTagName("body")[0].appendChild(secretIdentity);
        document.getElementsByTagName("body")[0].appendChild(powersTitle);
        document.getElementsByTagName("body")[0].appendChild(powers);
    }
};