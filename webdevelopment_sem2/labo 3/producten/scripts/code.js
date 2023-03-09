const setup = () => {
    document.getElementById("btnCalc").addEventListener("click", click);
}
const click = () => {
//product 1
    let totaal1 = parseFloat( document.getElementById("price1").innerHTML) * document.getElementById("input1").value;
    let btw1 = (parseFloat(document.getElementById("btw1").innerHTML)/100) * totaal1 + totaal1;
    document.getElementById("totaal1").innerHTML = btw1.toFixed(2) + " eur";
//product 2
    let totaal2 = parseFloat( document.getElementById("price2").innerHTML) * document.getElementById("input2").value;
    let btw2 = (parseFloat(document.getElementById("btw2").innerHTML)/100) * totaal2 + totaal2;
    document.getElementById("totaal2").innerHTML = btw2.toFixed(2) + " eur";
//product 3
    let totaal3 = parseFloat( document.getElementById("price3").innerHTML) * document.getElementById("input3").value;
    let btw3 = (parseFloat(document.getElementById("btw3").innerHTML)/100) * totaal3 + totaal3;
    document.getElementById("totaal3").innerHTML = btw3.toFixed(2) + " eur";
//optellen van alle totale prijzen
    let subtotaal = btw1 + btw2 + btw3;
    document.getElementById("subtotaal").innerHTML = subtotaal.toFixed(2) + " eur";

}
window.addEventListener("load", setup);