let cripto1 = document.getElementById("select1")
let cripto2 = document.getElementById("select2")
let cripto3 
let cripto4
let criptomoneda1;
let criptomoneda2;
let montoEnDolar;
let monto = document.getElementById("input-monto")
let boton = document.querySelector("#calcular")
let mostrarC = document.getElementById("mostrar-conversion")
let monto1;
const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
const criptomonedas = async (URL)=>{
    const respuesta = await fetch(URL)
    const CryptoObj = await respuesta.json()

    console.log(CryptoObj)

    // rellenando select de criptos 
CryptoObj.forEach(element => {
    const option = document.createElement("option")
    console.log(element);
    option.innerText=`
        ${element.name}
    `
    cripto1.appendChild(option)
});

CryptoObj.forEach(element => {
    const option = document.createElement("option")
    console.log(element);
    option.innerText=`
        ${element.name}
    `
    cripto2.appendChild(option)
});

// llamada a los campos del DOM
cripto1.addEventListener("change", ()=>{
    cripto3 = cripto1.value
//    buscar dentro del objeto
    criptomoneda1 = CryptoObj.find((i)=> {
            
        if(  i.name === cripto3){
            return i
        }
       })
       console.log(criptomoneda1)
       return criptomoneda1
})

monto.addEventListener("change",()=>{

        console.log(parseFloat(monto.value));
    return parseFloat(monto.value)

})

cripto2.addEventListener("change",  ()=>{ 
    cripto4 = cripto2.value
//    buscar dentro del objeto
    criptomoneda2 = CryptoObj.find((i)=> {
        if(  i.name === cripto4){
            return i
        }
       })
       console.log(criptomoneda2);
    return criptomoneda2
})

}


criptomonedas(URL)

//    Ejecucion del calculo
boton.addEventListener("click",()=>{ 
    montoEnDolar = parseFloat(monto.value) * criptomoneda1.current_price;
    monto1 = montoEnDolar / criptomoneda2.current_price;
//    mostrar por pantalla
    mostrarC.innerText = monto1;
    if(Number.isNaN(monto1) == true){
        Toastify({
            text: "Caracter invalido, por favor ingrese un numero",
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
    
});



