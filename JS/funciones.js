
{/* /// funciones // hay funciones:
// sin parametros y sin retornos
//sin parametros y con valores de retornos
//con paramentros y con valores de retorno
//con parametros y sin retornos */}

function clickme(){
alert("Soy una Función");
}


function validar(){

let user=document.getElementById('user').value;
let pass=document.getElementById('pass').value;
let idcard=document.getElementById('idcard').value;

if(user===""){
alert("Debe llenar el campo user");
return false;

}

if(pass===""){
    alert("Debe llenar el campo password");
    return false;
    
    }
    if(idcard===""){
        alert("Debe llenar el campo cédula");
        return false;
        
        }

        //validar que idcar sea un numero
        if(isNaN(idcard)){
            alert("El campo debe cedula debe ser numerico");
            return false;
            
            }


    //pendiente return

}


