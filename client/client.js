const API_URL = 'http://localhost:3000/places?type=';

document.querySelector('form').addEventListener('submit', formSubmitted);

function formSubmitted(event) {
	event.preventDefault();
	const type = document.querySelector('#search').value;
	document.querySelector('.places').innerHTML = 'Searching...'
	fetch(`${API_URL}${type}`)
		.then(res => {
			return res.json();
		}).then(json => {
			if(json.results && json.results.length > 0) {
				let html = '';
				json.results.forEach(result => {
					html += `<h2>${result.name}</h2>`;
				});
				document.querySelector('.places').innerHTML = html;
			} else {
				document.querySelector('.places').innerHTML = `
					<div class="alert alert-danger" role="alert">No places found.</div>
				`
			}
		})
}
