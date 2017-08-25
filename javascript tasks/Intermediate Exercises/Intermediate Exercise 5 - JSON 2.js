//use strict;

const requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
const request = new XMLHttpRequest();
                
request.open("GET", requestURL);
request.responseType = "json";
request.send();
                
request.onload = function() {
    let requestData = request.response;

    var sortKing = "";
    var sortHouse = "";
    var sortDates = "";
    
    sortKing += "<select>";
    sortKing += " <option id = \"defaultK\" onchange=\"print(this.value)\">Please select a king</option>";
    for (let x in requestData) {
        sortKing += `<option value = \"${requestData[x].nm}\">` + requestData[x].nm;
    }
    sortKing += "</select>";
    document.getElementById("chooseKing").innerHTML = sortKing;

    sortHouse += "<select>";
    sortHouse += " <option id = \"defaultH\" onchange=\"print(this.value)\">Please select a house</option>";
    for (let y in requestData) {
        sortHouse += `<option value = \"${requestData[y].hse}\">` + requestData[y].hse;
    }
    sortKing += "</select>";
    document.getElementById("chooseHouse").innerHTML = sortHouse;
    //TODO: stop it generating duplicates
    
    sortDates += "<select>";
    sortDates += " <option id = \"defaultD\" onchange=\"print(this.value)\">Please select some dates</option>";
    for (let z in requestData) {
        sortDates += `<option value = \"${requestData[z].yrs}\">` + requestData[z].yrs;
    }
    sortDates += "</select>";
    document.getElementById("chooseDates").innerHTML = sortDates;

    var txt = "";

    function print(selection) {
        var selected = requestData.find(a => a.includes(selection));
        
        txt += "<table border='1'>";
        selected.forEach((b) => b.forEach((c) => txt += "<tr><td>" + c + "</td></tr>"));
        txt += "</table>";        
        document.getElementById("tbl").innerHTML = txt;
    }
    //TODO: get function to work
};