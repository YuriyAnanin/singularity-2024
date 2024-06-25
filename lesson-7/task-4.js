class User {
	static userCount = 0;

	constructor(username) {
		this.username = username;
		User.userCount += 1;
	}
}

u1 = new User("johnsmith10");
console.log(User.userCount); // 1
console.log(u1.username); // "johnsmith10"

u2 = new User("marysue1989");
console.log(User.userCount); // 2
console.log(u2.username); // "marysue1989"

u3 = new User("milan_rodrick");
console.log(User.userCount); // 3
console.log(u3.username); // "milan_rodrick"
