const setup = ()=> {


    let btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", mouseHover)
    btnTry.addEventListener("click", onClick)
    btnTry.addEventListener("mouseout", mouseOut)
    btnTry.addEventListener("changeContent", changeContent)

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    document.getElementById("btnContent").addEventListener("click", changeContent);

}

const mouseHover = () => {
    document.getElementById("event").innerHTML += "MouseHover <br>"
}

const onClick = () => {
    document.getElementById("event").innerHTML += "click <br>"
}

const mouseOut = () => {
    document.getElementById("event").innerHTML += "mouse out <br>"
}

const withoutBullets = () =>{
    let listItems = document.getElementsByTagName("li")
    for (let i = 0; i< listItems.length; i++) {
        //listItems[i].style.listStyleType = "none";
        //listItems[i].style.backgroundColor = "red";
        //listItems[i].className = "listItemsStyleNone colorRed";
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
    }
}

const withBullets = () =>{
    let listItems = document.getElementsByTagName("li")
    for (let i = 0; i< listItems.length; i++) {
        //listItems[i].style.listStyleType = "disc";
        //listItems[i].style.backgroundColor = "white";
        //listItems[i].className = "listItemsStyleDisc colorWhite";
        listItems[i].classList.remove("listItemsStyleNone");
        listItems[i].classList.remove("colorRed");
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("out" + listItems[i].className)
    }
}

const changeContent = () =>{

    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}


window.addEventListener("load", setup );




