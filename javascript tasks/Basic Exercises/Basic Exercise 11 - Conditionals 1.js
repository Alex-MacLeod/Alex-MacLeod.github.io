function make(name,age,job) {
	var it = {};
		it.name = name;
		it.age = age;
		it.job = job;
		return it;
}
var elliot = make("Elliott",37,"wizard");

function age2040(person) {
    if (+person.age>=20 && +person.age<=40) {
        alert(person.name + " is between 20 and 40 years old");
    } else {
        alert(person.name + " is either too old or too young");
    }
}