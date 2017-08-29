"use.strict";

let garage = [];
let onRoad = [];

function carMaker(make, regNo, colour, fuelType, faults) {
    let car = {};
    car.make = make,
    car.regNo = regNo,
    car.colour = colour,
    car.fuelType = fuelType,
    car.faults = faults;
    return car;
}

function checkIn() {
    let checkInRegNo = document.getElementById("checkIn").value;
    if (checkInRegNo === "") {
        alert("Error: invalid registration number");
    } else {
        garage.push(onRoad.find((x) => x.regNo === checkInRegNo));

        let roadIndex = onRoad.findIndex((x) => x.regNo === checkInRegNo);
        onRoad.splice(roadIndex, 1);
    }
}

function checkOut() {
    let checkOutRegNo = document.getElementById("checkOut").value;
    if (checkOutRegNo === "") {
        alert("Error: invalid registration number");
    } else {
        onRoad.push(garage.find((y) => y.regNo === checkOutRegNo));

        let garageIndex = garage.findIndex((y) => y.regNo === checkOutRegNo);
        garage.splice(garageIndex, 1);
    }
}

function outputGarage() {
    let txt = "";
    txt += "<table border='1'>";
    for (let v=0; v<garage.length; v++) {
        txt += "<tr><td>" + "####" + "</td></tr>";
        txt += "<tr><td>" + garage[v].make + "</td></tr>";
        txt += "<tr><td>" + garage[v].regNo + "</td></tr>";
        txt += "<tr><td>" + garage[v].colour + "</td></tr>";
        txt += "<tr><td>" + garage[v].fuelType + "</td></tr>";
        txt += "<tr><td>" + garage[v].faults + "</td></tr>";
    }
    txt += "</table>";
    document.getElementById("outputGarage").innerHTML = txt;
}

function calcBill() {
    let calcBillRegNo = document.getElementById("calcBill").value;
    let base = 50;
    let billCar;

    if (calcBillRegNo === "") {
        alert("Error: invalid registration number");
    } else {
        billCar = garage.find((y) => y.regNo === calcBillRegNo);
    }

    let bill = "The bill for repairing " + billCar.regNo + " amounts to ";
    bill += billCar.faults * base + " GBP";
    document.getElementById("printBill").innerHTML = bill;
}

function createVehicle() {
    let m = document.getElementById("createMake");
    let f = document.getElementById("createFuelType");

    let cMake = m.options[m.selectedIndex].value;
    let cRegNo = document.getElementById("createRegNo").value;
    let cColour = document.getElementById("createColour").value;
    let cFuelType = f.options[f.selectedIndex].value;
    let cFaults = document.getElementById("createFaultNo").value;

    if (cMake === "") {
        alert("Error: invalid car make");
    } else if (cRegNo === "") {
        alert("Error: invalid registration number");
    } else if (cFuelType === "") {
        alert("Error: invalid fuel type");
    } else {
        let car = carMaker(cMake, cRegNo, cColour, cFuelType, cFaults);
        onRoad.push(car);
    }
}

function enableNumFaults() {
    let faulty = document.getElementById("createFaulty").checked;
    if (faulty) {
        let faults = "<input id = \"createFaultNo\" placeholder = \"Enter number of faults\" type = \"number\" />";
        document.getElementById("createNumFaults").innerHTML = faults;
    }
}

function enableCommandLine() {
    let commBox = "<textarea id = \"commandHistory\" class = \"comm\" rows = 8 cols = 50 wrap = \"hard\" readonly></textarea>";
    let commLine = "<input id = \"commandLine\" placeholder = \"Input commands here\" class = \"comm\ type = \"text\" />";
    let commSubmit = "<button type=\"button\" onclick=\"command()\">Submit</button>";
    document.getElementById("outputBox").innerHTML = commBox;
    document.getElementById("createCL").innerHTML = commLine;
    document.getElementById("createCB").innerHTML = commSubmit;
}

function command() {
    let commandInput = document.getElementById("commandLine").value.split(" ");
    let output;
    switch (commandInput[0]) {
        default: output = `Did not recognise command \"${commandInput[0]}\". You can use the \"help\" command to find the list of commands available`;
        break;
        case "help":
                output = "List of commands: calculate, checkIn, checkOut, clear, create, help, output";
            break;
        case "calculate":
                //TODO: implement calcBill function
                break;
        case "checkIn":
                //TODO: implement checkIn function
                break;
        case "checkOut":
                //TODO: implement checkIn function
                break;
        case "clear":
                if (undefined === commandInput[1]) {
                    //TODO: implement clear function
                } else {
                    output = "ERROR: \"clear\" cannot take additional arguments";
                }
                break;
        case "create":
                //TODO: implement createCar function
                break;
        case "output":
                //TODO: implement outputgarage function
                break;
    }
    document.getElementById("commandHistory").innerHTML += output + "\n";
}