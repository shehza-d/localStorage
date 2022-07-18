let arrayOfObjects = [];

let signUp = () => {
	console.log(`signup function running`)
	let objectOfUserData = {
		name : document.querySelector('#userName').value,
		email : document.querySelector('#email').value,
		dob : document.querySelector('#dob').value,
		city : document.querySelector('#city').value,
		password : document.querySelector('#password').value,
		repeat_password : document.querySelector('#repeat_password').value
	}
	// console.log(object)
	let stringifiedObject = JSON.stringify(objectOfUserData);
localStorage.setItem("user1",stringifiedObject);

	arrayOfObjects.push(myObject)
	console.log(arrayOfObjects)
	
}















let move_page = () => {
	window.location.href = './index.html';
} 