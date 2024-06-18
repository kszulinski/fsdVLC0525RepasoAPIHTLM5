
const inputName = document.getElementById("name");

const saveData = () => {

    //guardo en localStorage///////////////////////
    // localStorage.setItem("myname", inputName.value)
    ///////////////////////////////////////////////

    //EN CASO DE QUERER GUARDAR UN OBJETO...OCURRE LO SIGUIENTE...//

    let dia = {
        clima: "nublado",
        mes: "junio",
        dia: 19
    }

    ////////////////////////////////////////////////////////
    // COMO PODEMOS OBSERVAR, SESSIONSTORAGE SERÍA LO MISMO
    // sessionStorage.setItem("myday", JSON.stringify(dia))
    ////////////////////////////////////////////////////////

    localStorage.setItem("myday", JSON.stringify(dia))
};

const readData = () => {

    // let resultado = localStorage.getItem("myname")
    // console.log(resultado)

    //COMO LEEMOS UN OBJETO QUE SE HA GUARDADO EN FORMA DE STRING EN LOCALSTORAGE??

    let myObject = JSON.parse(localStorage.getItem("myday"))
    console.log(myObject)
}

const cleanItem = () => {
    //Con este método borro un elemento en concreto
    localStorage.removeItem("myday")
}

const cleanData = () => {
    //Esto vacía todo lo que haya en el localStorage
    localStorage.clear()
}