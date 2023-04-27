const setup = () => {
    let start = new Date();
    let birthdate = new Date(2002, 2, 28)
    console.log((start.getDate()) + "/" +(start.getMonth()+1) + "/"+ (start.getFullYear()) + "  " + (start.getHours()) + ":"+ (start.getMinutes())+":"+(start.getSeconds()))
    let timeAlive = start - birthdate
    console.log(Math.round(timeAlive/(1000*60*60*24)));
console.log("----------------------------------------------------------------------------------------------")
    let event = new Date()

    console.log("toString " + event.toString());


    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());

}
window.addEventListener("load", setup);