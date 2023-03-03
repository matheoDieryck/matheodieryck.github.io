const setup = () => {
    let listItems = document.getElementsByClassName("belangrijk")
    for(let i = 0; i< listItems.length; i++){
        listItems[i].classList.add("opvallend")
    }

}
window.addEventListener("load", setup);