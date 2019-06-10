(function() {

function init() {
	handler();
	addRating();
}	

function genStars() {

	let rating = document.createElement('div');
	 	rating.className ='rating';

	for (let i = 0; i < 5; i++) {
		let star = document.createElement('span');
		star.innerHTML = '☆';
		rating.appendChild(star);
	}

	return rating;
}

function addRating() {
	
	document.querySelector('.new_movie > button').onclick = func;
	function func(e) {
		let rows = document.getElementsByClassName('movies')[0],
		div = document.createElement('div'),
		li = document.createElement('li');
		input = document.querySelector('input');

		div.classList.add('li_movie');

		li.innerHTML = input.value;
		div.appendChild(li);
		div.appendChild(genStars());
		rows.appendChild(div);
	}
}


function reset(array) {
	array.forEach(function(star){
		star.classList.remove('mark');
	});
}

function markStars(length, row) {
	for (let i = 0; i <= length; i++) {
		row[i].classList.add('mark');
	}
}

function move(rows) {
	return rows.sort(function(a, b) { 
	  if (b.getElementsByClassName('mark').length > a.getElementsByClassName('mark').length) { 
	    return 1; 
	} 
	  if (b.getElementsByClassName('mark').length < a.getElementsByClassName('mark').length) { 
	    return -1; 
	} 
	  return 0; 
	});
}

function handler() {
	let movies = document.querySelector('.wrap');
	movies.addEventListener('click', function(e) {
		let el = event.target;

		if(el.tagName === "SPAN") {
			// init
			let collection = (el.closest('.rating')).getElementsByTagName('span');
			let rows = [...document.getElementsByClassName('rating')];
			let movies = [...document.getElementsByClassName('li_movie')];
			let container = document.querySelector('.movies');
			let array = [...collection];
			let ul = document.createElement('ul');

			// reset all stars 
			reset(array);

			// mark 
			array.forEach(function(star,i) {
				if (star === el) {
					markStars(i, array);
				}
			});
			// move
			let rightRows = move(movies);

			//rerender
			container.parentNode.removeChild(container);
			ul.classList.add('movies');
			rightRows.forEach(function(div){
				ul.appendChild(div);
			});
			document.querySelector('.wrap').appendChild(ul);
		}
	});
}

init();

})()