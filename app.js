let buttonTarget = document.querySelector('button');

function ping() {
	document.getElementById("all").innerHTML = "<img src= 'dog.jpeg' width='1000px' height='1000px' display= 'flex' justify-content = 'center'  >  "
}

buttonTarget.addEventListener('click', ping);
