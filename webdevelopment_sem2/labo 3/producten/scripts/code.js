const setup = () => {
    document.getElementById("btnCalc").addEventListener("click", click);
}
const click = () => {
//product 1
    let price1 = parseFloat( document.getElementById("price1").innerHTML);
    let aantal1 = document.getElementById("input1");
    aantal1 = aantal1.value
    let totaal1 = +aantal1 * +price1
    let btw1 = (parseFloat(document.getElementById("btw1").innerHTML)/100) * totaal1 + totaal1
    document.getElementById("totaal1").innerHTML = btw1.toFixed(2) + " eur";
//product 2
    let price2 = parseFloat( document.getElementById("price2").innerHTML);
    let aantal2 = document.getElementById("input2");
    aantal2 = aantal2.value
    let totaal2 = +aantal2 * +price2
    let btw2 = (parseFloat(document.getElementById("btw2").innerHTML)/100) * totaal2 + totaal2
    document.getElementById("totaal2").innerHTML = btw2.toFixed(2) + " eur";
//product 3
    let price3 = parseFloat( document.getElementById("price3").innerHTML);
    let aantal3 = document.getElementById("input3");
    aantal3 = aantal3.value
    let totaal3 = +aantal3 * +price3
    let btw3 = (parseFloat(document.getElementById("btw3").innerHTML)/100) * totaal3 + totaal3
    document.getElementById("totaal3").innerHTML = btw3.toFixed(2) + " eur";

    let subtotaal = btw1 + btw2 + btw3
    document.getElementById("subtotaal").innerHTML = subtotaal.toFixed(2) + " eur"

}
window.addEventListener("load", setup);