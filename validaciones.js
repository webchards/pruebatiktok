function habilitar(){
    code = document.getElementById("code").value;

    validar=0;
    if(code == ""){
        validar++;
    }

    if(validar == 0){
        document.getElementById("button").disabled = false;
    }else{
        document.getElementById("button").disabled = true;
    }
}
document.getElementById("code").addEventListener("keyup", habilitar);
