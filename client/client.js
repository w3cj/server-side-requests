const API_URL = 'http://localhost:3000/places?type=';

document.querySelector('form').addEventListener('submit', formSubmitted);

function formSubmitted(event) {
	event.preventDefault();
	const type = document.querySelector('#search').value;
	fetch(`${API_URL}${type}`)
		.then(res => {
			return res.json();
		}).then(json => {
			let html = '';
			json.results.forEach(result => {
				html += `<h2>${result.name}</h2>`;
			});
			document.querySelector('.places').innerHTML = html;
		})
}
