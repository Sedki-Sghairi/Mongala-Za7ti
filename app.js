const secondElement = document.getElementById('secondElement');
const minuteElement = document.getElementById('minuteElement');
const hourElement = document.getElementById('hourElement');
const numbers = document.querySelectorAll('.number');
const pop = document.getElementById('pop');
gettime();
setInterval(gettime, 1000);

function gettime() {
	let sec = new Date().getSeconds() / 60 * 360;
	let hour = new Date().getHours() / 12 * 360;
	let min = new Date().getMinutes();
	move(secondElement, sec);
	move(minuteElement, min / 60 * 360);
	move(hourElement, hour);
	pop.innerText = `${min}`;
	if (min < 45 && 15 < min) {
		let x = pop.style;
		x.setProperty('transform', 'rotate(180deg)');
		x.setProperty('-moz-transform', 'rotate(180deg)');
		x.setProperty('-webkit-transform', 'rotate(180deg)');
		x.setProperty('-o-transform', 'rotate(180deg)');
		x.setProperty('-ms-transform', 'rotate(180deg)');
	}
	numbers.forEach((element) => {
		let y = new Date().getHours();
		let z = new Date().getMinutes() / 5;
		if (y > 12) {
			y -= 12;
		}
		if (element.firstChild.innerHTML != y) {
			element.firstChild.style.color = '#f9fbfc';
		} else {
			element.firstChild.style.color = '#ffab91';
			element.firstChild.style.fontFamily = "'Long Cang', cursive'";
		}
	});
}

function move(element, angle) {
	let x = element.style;
	x = x.setProperty('--rotation', `${angle}`);
}
