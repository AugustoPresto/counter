let count = document.getElementById('numero')

function reset() {
	if (count.innerHTML != 0) {
		count.innerHTML = 0
		count.style.color = 'black'
	}
}

function decrease() {
	count.innerHTML--
	if (count.innerHTML < 0) {
		count.style.color = 'red'
	}
	if (count.innerHTML == 0) {
		count.style.color = 'black'
	}
}

function increase() {
	count.innerHTML++
	if (count.innerHTML > 0) {
		count.style.color = 'green'
	}
	if (count.innerHTML == 0) {
		count.style.color = 'black'
	}
}