let seleccion = document.getElementById("select");
let boton = document.getElementById("eliminar")
let elegido;
let criptomoneda1;
let guardado;
let nuevoGuardado = [];
let cargado;

const lista = document.getElementById("lista-criptos")

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"

const fetchApi = async (URL)=>{ 
    const respuesta = await fetch(URL)
    const CryptoObj = await respuesta.json()
// ----------------
// rellenando select de criptos
CryptoObj.forEach(element => {
    const option = document.createElement("option")
    console.log(element);
    option.innerText=`
        ${element.name}
    `
    seleccion.appendChild(option)
});



seleccion.addEventListener("change", ()=>{
    elegido = seleccion.value
//    buscar dentro del objeto
    criptomoneda1 = CryptoObj.find((i)=> {
            
        if(  i.name === elegido){
            return i
        }
       })
    //    console.log(criptomoneda1)
    // --------------
    // guardar en local storage
    guardado = {cripto: criptomoneda1.name, precio: criptomoneda1.current_price}


nuevoGuardado = (JSON.parse(localStorage.getItem("guardado"))) || []

console.log(nuevoGuardado);

    if(nuevoGuardado != ""){

        // control de repetidos y guardado en localstorage
            if(!nuevoGuardado.find(i => i.cripto === guardado.cripto)){
                nuevoGuardado.push(guardado)
                localStorage.setItem("guardado", JSON.stringify(nuevoGuardado))
                location.reload()
            }else{
               
                console.log("repetido!!!!!!");
                Toastify({
                    text: "Cripto ya guardada",
                    duration: 2000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "red",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
        

            }
    }else{

        localStorage.setItem("guardado", JSON.stringify([guardado]))
        location.reload()

    }
    // setTimeout(() => {
    //     location.reload()
    // }, 1000);
    // location.reload()
})
}

    fetchApi(URL)





//  solicitar informacion del local storage
cargado = JSON.parse(localStorage.getItem("guardado"));
    // crear etiquetas html para mostrar el objeto almacenado en local storage
    cargado.forEach(element => {
        if(cargado !== null){
            let listado = document.getElementById("listado")
                    let div = document.createElement("div");
                    div.innerHTML = element.cripto + " " + element.precio;
                    listado.appendChild(div)
        }
    });
    
//  Eliminar almacenamiento
boton.addEventListener("click", ()=>{
localStorage.removeItem("guardado")
location.reload()
})






