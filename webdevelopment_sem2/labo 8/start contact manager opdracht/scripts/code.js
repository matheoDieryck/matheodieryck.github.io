let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    let persoon={};
    vulPersoonOpBasisVanUserInterface(persoon)
    personen.push(persoon);
    voegPersoonToeAanLijstInUserInterface(persoon)
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
};
const vulPersoonOpBasisVanUserInterface = (persoon) =>{
    let txtVoornaam = document.getElementById("txtVoornaam");
    persoon.voornaam = txtVoornaam.trim
    let txtFamllienaam = document.getElementById("txtFamilienaam");
    persoon.familienaam = txtFamllienaam.trim
    let txtEmail = document.getElementById("txtEmail");
    persoon.email = txtEmail.trim

};

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option")
    option.text = persoon.voornaam + " " + persoon.familienaam
    option.value = persoon.email;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length -1;
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex= -1;
    let inputElem = document.querySelectorAll('input[type=text]')
    inputElem.forEach((elem:element))

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);