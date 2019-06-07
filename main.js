let ul = document.querySelector('ul');
let items = document.querySelectorAll('li');
let button = document.querySelector('button');
let span = document.querySelectorAll('span');
let input = document.querySelector('input');
let rating = document.querySelectorAll('.rating')

/*

button.addEventListener('click', function() {
	let sorted = [...items].sort(function(a,b){
		return a.innerHTML - b.innerHTML;
	});
	ul.innerHTML = '';

	for (let li of sorted) {
		ul.appendChild(li);
	}
});

*/

ul.addEventListener('click', function(e){
	let items = e.target.closest('li');
	if (items) {
		items.classList.toggle('toggle');
	}	
})




function addMovie() {
	let text = input.value;
	if(text) {
		let newli = document.createElement('li');
		newli.innerText = text;
		newli.className += "li_movie";
		ul.appendChild(newli);
		input.value = '';
	}
}

button.addEventListener('click',addMovie);



