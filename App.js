const pedido=[]
const marca = "Hamburguesas McTEO"

// FUNCION
const nombre = document.getElementById('nombre');
const selectPan = document.getElementById('selectPan');
const selectHamburguesa = document.getElementById('selectHamburguesa');
const selectAderezo = document.getElementById('selectAderezo');
const selectBebida = document.getElementById('selectBebida');
const btnConfirmar = document.getElementById('btnConfirmar');

selectPan.addEventListener('change', actualizarPedido);
selectHamburguesa.addEventListener('change', actualizarPedido);
selectAderezo.addEventListener('change', actualizarPedido);
selectBebida.addEventListener('change', actualizarPedido);
btnConfirmar.addEventListener('click', confirmarPedido);


function actualizarPedido () {
    let saludo ="Bienvenid@ " + nombre.value + " a la terminal de pedidos de Mcteo " 
    let opcion = parseInt (selectPan.value)
    
    var pedido = new Array(5);
    pedido[0] = new Array(5);
    pedido[1] = new Array(5);
    pedido[2] = new Array(5);
    pedido[3] = new Array(5);

//Saludo//
switch(opcion){
    case 0:
pedido[0][0]= 0
pedido[0][1]= ""
break;

case 1:
 pedido[0][0]= 50
pedido[0][1]= "blanco"
break;
case 2: 
pedido[0][0]= 60
pedido[0][1]= "salvado"
break;
case 3:  
pedido[0][0]= 85
pedido[0][1]= "semillas"
break;
case 4:
    pedido[0][0]= 100
pedido[0][1]= "centeno"
break;
}



// ------------------------------------------------------
opcion =parseInt (selectHamburguesa.value)
switch(opcion){
    case 0:
        pedido[1][0]= 0
        pedido[1][1]= ""
        break; 
case 1:
    pedido[1][0]= 450
        pedido[1][1]= ", simple"
        break; 
case 2: 
pedido[1][0]= 500
        pedido[1][1]= ", doble"
        break; 
case 3:   
pedido[1][0]= 480
        pedido[1][1]= ", triple"
        break; 
    
}


// --------------------------------------------------------------

opcion =parseInt (selectAderezo.value)

switch(opcion){
    case 0:
        pedido[2][0]= 0
        pedido[2][1]= ""
        break; 
case 1:
    pedido[2][0]= 20
    pedido[2][1]= ", con ketchup"
    break; 
case 2: 
pedido[2][0]= 20
    pedido[2][1]= ", con mayonesa"
    break; 
case 3:    
pedido[2][0]= 20
    pedido[2][1]= ", con mostaza"
    break; 
case 4:
    pedido[2][0]= 40
    pedido[2][1]= ", con mayonesa, ketchup y mostaza"
    break; 
}


// ----------------------------------------------------------------
opcion =parseInt (selectBebida.value)

switch(opcion){
    case 0:
        pedido[3][0]= 0
        pedido[3][1]= ""
        break; 
case 1:
    pedido[3][0]= 70
    pedido[3][1]= " y una botella de agua"
    break; 
  
    
case 2: 
pedido[3][0]= 100
    pedido[3][1]= " y una botella de Coca Cola"
    break; 
case 3:    
pedido[3][0]= 100
    pedido[3][1]= " y una botella de Sprite"
    break; 
case 4:
    pedido[3][0]= 100
    pedido[3][1]= " y una botella de Fanta"
    break; 
}



// let precioTotal = pedido [0,0] + pedido [1,0] + pedido [2,0] + pedido [3,0]
var precioPedido=0
var stringPedido=""
for(i=0;i<=3;i++){
    precioPedido=precioPedido+pedido[i][0] 
    stringPedido=stringPedido+pedido[i][1]
}
document.getElementById("titulo").innerHTML = nombre.value + "tu pedido es: ";
document.getElementById("descripcionPedido").innerHTML = "una hamburguesa con pan " + stringPedido;
document.getElementById("precio").innerHTML = nombre.value + "el precio de tu pedido es: " + precioPedido;


}

function confirmarPedido(){
    document.getElementById("confirmacion").innerHTML = nombre.value + " Gracias por su pedido "; 
    document.getElementById("selectPan").disabled = nombre.value + " Gracias por su pedido "; 
    document.getElementById("selectHamburguesa").disabled = nombre.value + " Gracias por su pedido "; 
    document.getElementById("selectAderezo").disabled = nombre.value + " Gracias por su pedido "; 
    document.getElementById("selectBebida").disabled = nombre.value + " Gracias por su pedido "; 
    
}   

// btnConfirmar = () => {
    
// }