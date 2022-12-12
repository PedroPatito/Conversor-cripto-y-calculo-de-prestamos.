let elegido;
let criptomoneda1;
let seleccion = document.getElementById("select");
let btnCalcular = document.getElementById("calcular");
let mostrar = document.getElementById("mostrar-conversion");
let monto = document.getElementById("input-monto")
let cuotasSelect = document.getElementById("select-cuotas")
let total;

// selector de cuotas
cuotasSelect.addEventListener("change", ()=>{
    cuotas = cuotasSelect.value
    console.log(cuotas)
    return cuotas

})
// Toma el monto a evaluar
monto.addEventListener("change",()=>{
    console.log(parseFloat(monto.value));

    prestamo = parseFloat(monto.value)
return prestamo
})

// Evento click, ejecuta el final del script

btnCalcular.addEventListener("click",()=>{ 
    if(cuotas === "12"){
        total = ((prestamo * 12)/100) + prestamo
            console.log(total)
    }else if(cuotas === "9" ){
        total = ((prestamo * 9)/100) + prestamo
            console.log(total)
    }else if(cuotas === "6"){
        total = ((prestamo * 6)/100) + prestamo
            console.log(total)
    }else if (cuotas === "3"){
        total = ((prestamo * 3)/100) + prestamo
            console.log(total)
    }else if(cuotas === "1"){
        total = ((prestamo * 1)/100) + prestamo
            console.log(total)
    }
    console.log(total)
    // Mostramos el resultado en el output
    mostrar.innerText = total

    if(Number.isNaN(prestamo) == true){
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