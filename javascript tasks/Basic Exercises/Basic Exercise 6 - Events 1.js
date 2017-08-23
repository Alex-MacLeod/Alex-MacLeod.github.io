var person = {
	"name": "Bob", 
	"age": 40, 
	"occupation": "builder"
};
			
document.write(person.name + ", "),
document.write(person.age + ", "),
document.write(person.occupation);

function addAge(person) {
	person.age++;
	alert(person.name + " is now " + person.age + " years old");
}