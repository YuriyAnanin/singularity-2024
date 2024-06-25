class Employee {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = `${firstname} ${lastname}`;
		this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.kz`;
	}
}

let emp1 = new Employee("John", "Smith");
console.log(emp1.fullname); // "John Smith"

let emp2 = new Employee("Mary", "Sue");
console.log(emp2.email); // "mary.sue@company.com"

let emp3 = new Employee("Antony", "Walker");
console.log(emp3.firstname); // "Antony"
console.log(emp3.lastname); // "Walker"
