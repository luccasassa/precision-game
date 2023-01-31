const d = document;
let puntos = 0;
let puntosNecesarios = 20;
let segundos = 10;

d.getElementById("tiempo").textContent = segundos;

const sumarPuntos = () => {
	if (puntos == puntosNecesarios) {
		alert("BUEN AIM PAPU\n" + 
		'VA DE NUEVOOOO');

		puntos = 0;
		segundos = 10;

	} else puntos ++;
	
	d.getElementById("puntos").textContent = puntos;
}

const moverPersonaje = () => {
	const bot = d.querySelector(".bot");
	randomX = Math.random()*500;
	randomY = Math.random()*500;
	bot.style.top = `${randomY}px`;
	bot.style.left = `${randomX}px`;
}

d.querySelector(".bot").addEventListener("mouseenter",() => {
	sumarPuntos();
	moverPersonaje();
});


setInterval(()=>{
	segundos--;
	d.getElementById("tiempo").textContent = segundos;

	if (segundos === 0) {
		alert("LE FALTA POLENTA A ESA MUÑECA\n" + 
		'VA DE NUEVOOOO');

		puntos = 0;
		d.getElementById("puntos").textContent = puntos;
		segundos = 10;
	}
	
} ,1000);
