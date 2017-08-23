function make(name,age,job) {
	var it = {};
		it.name = name;
		it.age = age;
		it.job = job;
		return it;
}

var person;

function read() {
	personName = document.getElementById("inputName").value;
	personAge = document.getElementById("inputAge").value;
	personJob = document.getElementById("inputJob").value;
	person = make(personName,personAge,personJob);
	console.log(person.name + ", " + person.age + ", " + person.job);
}
			
function editAge() {
	var newAge = document.getElementById('inputNewAge').value;
	person.age = newAge;
	alert("Age is now " + person.age);
}