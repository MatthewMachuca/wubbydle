let buttonTarget = document.querySelector('button');

function ping() {
	document.getElementById("all").innerHTML = "<img src= 'bird.jpeg'> width='500px' height='500px'     "
}

buttonTarget.addEventListener('click', ping);