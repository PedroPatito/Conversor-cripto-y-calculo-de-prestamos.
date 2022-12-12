const lista = document.getElementById("lista-criptos")
// api almacenada en una constante y llamada con fetch
const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"

const fetchApi = async (URL)=>{
    const respuesta = await fetch(URL)
    const CryptoObj = await respuesta.json()

    // muestra una lista de criptomonedas en el dom
    CryptoObj.forEach(element => {
        console.log(element);
        const li = document.createElement("li")
        li.innerHTML =`
        <img class="cripto-list" src="${element.image}">
        <p class="name">${element.name}</p>
        <p class="precio">${element.current_price}</p>
        <p class="maximo">${element.high_24h}<p>
       
        `
        lista.appendChild(li)
    });
}
fetchApi(URL)

