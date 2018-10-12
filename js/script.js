// const url = 'http://airbnb.douglasmaia.com/api/properties';
// const quartos = fetch(url);
// const resposta = quartos.then(response => response.json()).then(result => result).catch(err => console.log(err));

const request = new XMLHttpRequest();
request.open('GET', 'http://airbnb.douglasmaia.com/api/properties', false);
request.send();
let quartos = JSON.parse(request.responseText);

document.addEventListener("DOMContentLoaded", () => {

	let k = 0;
	quartos.forEach(i => {

		let div = document.createElement('div');
		div.setAttribute('class', 'dv');
		div.innerHTML =
			`
			<img src="${i.photo}" class="img-responsive"><br>
			<span class="sp">${i.name}</span><br>
			<span class="sp">${i.city}</span>
			`;
		document.getElementById('main').appendChild(div);
		k++;
	});
	
});
