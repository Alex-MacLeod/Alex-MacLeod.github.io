function maker(name, age, occupation) {
	var it = {};
	it.name = name,
	it.age = age,
	it.occupation = occupation;
	return it;
}
var person = maker("Bob", 40, "builder");
document.write(person.name + ", "),
document.write(person.age + ", "),
document.write(person.occupation);
		
person.age = 50;
		
document.write("\n" + person.name + ", "),
document.write(person.age + ", "),
document.write(person.occupation);