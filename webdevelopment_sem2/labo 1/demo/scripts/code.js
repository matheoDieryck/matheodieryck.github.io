const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);
    lblCursus.addEventListener("mouseout", changeout)

    let btnSend = document.getElementById("btnSend")
    btnSend.addEventListener("click", show)
}


    const change = () => {
        let lblCursus = document.getElementById("lblCursus");
        lblCursus.className = "cursus";
    }

    const changeout = () => {
        let lblCursus = document.getElementById("lblCursus");
        lblCursus.className = "";
    }

    const show =() => {
        let txtName = document.getElementById("txtName");

        if (txtName.value != "")
        {
            alert("jow naam is " + txtName.value)
        }
        console.log("jow naam is " + txtName.value)

        console.log(`jouw naam is $ {txtName.value}`)
    }


window.addEventListener("load", setup);