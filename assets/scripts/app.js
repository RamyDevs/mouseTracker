const x = document.getElementById('x');
const y = document.getElementById('y');

window.addEventListener('mousemove', (e) => {
	x.textContent = `OffsetX: ${e.offsetX}`;
	y.textContent = `OffsetY: ${e.offsetY}`;
	document.body.backgroundColor = `rgba(${e.offsetX}, ${e.offsetY}, 40, 1)`;
});
