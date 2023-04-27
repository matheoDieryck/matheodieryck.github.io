

const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let rgb = {
        red: red,
        green: green,
        blue: blue,
    }
   let colors = JSON.stringify(rgb);
    localStorage.setItem("VIVES.be.settingsColors", colors)

};

const restoreSliderValues = () => {
    let colors;
    let getItem = localStorage.getItem("VIVES.be.settingsColors")
        colors = JSON.parse(getItem);
        document.getElementById("sldRed").value = colors.red;
        document.getElementById("sldGreen").value = colors.green;
        document.getElementById("sldBlue").value = colors.blue;

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rgbColors = [];
    let swatches = document.getElementsByClassName("swatch");
    for(let i = 1 ; i < swatches.length; i++){
        let rgb ={
            red : swatches[i].getAttribute("data-red"),
            green : swatches[i].getAttribute("data-green"),
            blue : swatches[i].getAttribute("data-blue")
        }
        rgbColors.push(rgb);
    }
    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("colorpicker.swatches", jsonText);

};
/*
const restoreSwatches = () => {
    let swatches;
    let getSwatches = localStorage.getItem("colorpicker.swatches")];
        for(let i= 0; i < getSwatches.length; i++){
        swatches = JSON.parse(getSwatches[i])
        addSwatchComponent(swatches.red, swatches.green, swatches.blue);
        }
};
*/
const restoreSwatches = () => {
    let swatches = localStorage.getItem("colorpicker.swatches");
    if (swatches != null) {
        swatches = JSON.parse(swatches);
        swatches.forEach((swatch) => {
            addSwatchComponent(swatch.red, swatch.green, swatch.blue);
        });
    }
};
