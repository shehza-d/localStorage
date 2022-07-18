let signUp = () => {
	console.log(`signup function running`)
	let arrayOfObjects = [];
	let myObject = {
		name : document.querySelector('#userName').value,
		email : document.querySelector('#email').value,
		dob : document.querySelector('#dob').value,
		city : document.querySelector('#city').value,
		password : document.querySelector('#password').value,
		repeat_password : document.querySelector('#repeat_password').value

	}
	// console.log(object)
	arrayOfObjects.push(myObject)

	console.log(arrayOfObjects)
	
}















let move_page = () => {
	window.location.href = './index.html';
} 