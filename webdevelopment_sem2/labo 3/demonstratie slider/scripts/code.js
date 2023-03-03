const setup = () => {

	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	colorDemos[0].style.backgroundColor="rgb("+255+","+0+","+0+")"

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890µ
for(let i = 0; i < 3; i++) {
	sliders[i].addEventListener("change", update);
	sliders[i].addEventListener("input", update);
}

	// maak het blokje rood

}

const update = () => {
	let red=document.getElementById("sldRed").value
	let green=document.getElementById("sldGreen").value
	let blue=document.getElementById("sldBlue").value
	let colorDemos=document.getElementsByClassName("colorDemo");
    document.getElementById("valueRed").textContent = red;
	document.getElementById("valueGreen").textContent = green;
	document.getElementById("valueBlue").textContent = blue;

	colorDemos[0].style.backgroundColor="rgb("+red+","+green+","+blue+")";


	console.log("de waarde van de rode slider is momenteel : "+red);
	console.log("de waarde van de groene slider is momenteel : "+green);
	console.log("de waarde van de blauwe slider is momenteel : "+blue);

}



// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);