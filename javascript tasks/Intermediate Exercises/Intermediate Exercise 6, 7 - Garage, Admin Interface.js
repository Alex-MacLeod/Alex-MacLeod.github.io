//use.strict;

class Vehicle {
    constructor(make, model, regNo, fuelType, value, faults) {
        this.make = make;
        this.model = model;
        this.regNo = regNo;
        this.fuelType = fuelType;
        this.value = value;
        this.faults = faults;
    }
}

let garage = [];

function checkIn() {
    
}

function checkOut() {
    
}

function outputGarage() {
    garage.forEach(a => a);
}

function calcBill(carID) {
    
}

function createCar() {
    
}

function editCar(carID) {

}

function enableCommandLine() {
    let cL = "<input id = \"commandLine\" placeholder = \"Input commands here\" type = \"text\" />";
    document.getElementById("createCL").innerHTML = cL;
    }