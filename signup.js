let arrayOfObjects = [];
getAllUsers();

let signUp = () => {
	console.log(`signup function running`)
	let objectOfUserData = {
		name: document.querySelector('#userName').value,
		email: document.querySelector('#email').value,
		dob: document.querySelector('#dob').value,
		city: document.querySelector('#city').value,
		password: document.querySelector('#password').value,
		repeat_password: document.querySelector('#repeat_password').value
	}
	// console.log(object)
	localStorage.setItem("user1", JSON.stringify(objectOfUserData));
	// console.log(stringifiedObject)





	// arrayOfObjects.push(myObject)
	// console.log(arrayOfObjects)

}

// let string = localStorage.getItem("user1");
// console.log(string);

function getAllUsers() {
	// let getAllUsers = () => {   //ye nhi chal rhaa console kha raha hy can't access before initization
	console.log(`get all user function running`)

	arrayOfObjects = JSON.parse(localStorage.getItem("users1")) || [];

	// let userInStringForm = localStorage.getItem("users1");
	// arrayOfObjects = JSON.parse(userInStringForm) || [];
	// console.log(users);
}



console.log(arrayOfObjects)











let move_page = () => {
	window.location.href = './index.html';
} 