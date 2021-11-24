const separacion = document.getElementById("between"),
nav=document.getElementById("main-nav");
nav.addEventListener('mouseover', () => {
	separacion.style.display='none';
});
nav.addEventListener('mouseout', () => {
	separacion.style.display='block';
});