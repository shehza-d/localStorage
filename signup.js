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
	let stringifiedObject = JSON.stringify(objectOfUserData);
	localStorage.setItem("user1", stringifiedObject);
	// console.log(stringifiedObject)





	// arrayOfObjects.push(myObject)
	// console.log(arrayOfObjects)

}

// let string = localStorage.getItem("user1");
// console.log(string);

function getAllUsers() {
	// let getAllUsers = () => {   //ye nhi chal rhaa console kha raha hy can't access before initization
	console.log(`get all user function running`)

	let userInStringForm = localStorage.getItem("users1");
	arrayOfObjects = JSON.parse(userInStringForm) || [];
	// console.log(users);
}














let move_page = () => {
	window.location.href = './index.html';
} 