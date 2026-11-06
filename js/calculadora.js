function sumar(){

    //let = Declarar una variable
    //parseInt = Indica que es una variable numerica entera
    //document. Indica que los buacara en el HTML
    //getElementById Indica que lo busque por el id en las etiquetas
    //("num1") Es el id que tiene la tiqueta en el HTML
    //.value Para guardar lo que se escriba dentro de la etiqueta
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    let suma =varn1 + varn2;
    document.getElementById("resultado1").value =suma;
}
function restar(){
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    let resta =varn1 - varn2;
    document.getElementById("resultado1").value =resta;
}
function multi(){
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    document.getElementById("resultado1").value =`${varn1*varn2}`;
}
function divi(){
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    if(varn2==0){
        //ventana emergente
        alert("No se puede dividir por cero.");
        return; //finaliza el codigo para no mostrar el resultado
    }

    document.getElementById("resultado1").value =`${varn1/varn2}`;
}