const btnInicio = document.getElementById("init"),
	grid = document.getElementById("breadcrum"),
	btnNosotros = document.getElementById("we"),
	btnProductos = document.getElementById("products"),
	btnCotizaciones = document.getElementById("quotes"),
	btnContacto = document.getElementById("contact"),
	btnSocios = document.getElementById("partners"),
	textobreadcrum = document.getElementById("text-breadcrum");
btnInicio.addEventListener('mouseover', () => {
	textobreadcrum.innerHTML="Inicio";
	grid.style.display='block';
});
btnInicio.addEventListener('mouseout', () => {
	grid.style.display='none';
});
btnNosotros.addEventListener('mouseover', () => {
	textobreadcrum.innerHTML="Nosotros";
	grid.style.display='block';
});
btnNosotros.addEventListener('mouseout', () => {
	grid.style.display='none';
});
btnProductos.addEventListener('mouseover', () => {
	textobreadcrum.innerHTML="Productos";
	grid.style.display='block';
});
btnProductos.addEventListener('mouseout', () => {
	grid.style.display='none';
});
btnCotizaciones.addEventListener('mouseover', () => {
	textobreadcrum.innerHTML="Cotizaciones";
	grid.style.display='block';
});
btnCotizaciones.addEventListener('mouseout', () => {
	grid.style.display='none';
});
btnContacto.addEventListener('mouseover', () => {
	textobreadcrum.innerHTML="Contacto";
	grid.style.display='block';
});
btnContacto.addEventListener('mouseout', () => {
	grid.style.display='none';
});
btnSocios.addEventListener('mouseover', () => {
	textobreadcrum.innerHTML="Socios";
	grid.style.display='block';
});
btnSocios.addEventListener('mouseout', () => {
	grid.style.display='none';
});