function calcularPresupuesto(){
    let numeroinvitados = parseInt(document.getElementById("numero-inv").value);
    let comida = parseInt(document.getElementById ("cost-comida").value);
    let bebida = parseInt(document.getElementById("cost-bebida").value);
    let decoracion = parseInt(document.getElementById("cost-decor").value);
    let musica = parseInt(document.getElementById("cost-musica").value);
    let porcentaje = parseInt(document.getElementById("propina-porc").value);

    let comidaTotal = numeroinvitados * comida;
    let bebidaTotal = numeroinvitados * bebida;
    let decoracion1 = numeroinvitados * decoracion;
    let musica1 = numeroinvitados * musica;

    let subtotal = comidaTotal + bebidaTotal + decoracion + musica;
    let propina = subtotal * (porcentaje / 100);
    let total = subtotal + propina;

    document.getElementById("comida-total-s").textContent = comidaTotal.toFixed(0);
    document.getElementById("bebida-total-s").textContent = bebidaTotal.toFixed(0);
    document.getElementById("decoracion").textContent = decoracion1.toFixed(0);
    document.getElementById("musica").textContent = musica1.toFixed(0);
    document.getElementById("subtotal").textContent = subtotal.toFixed(0);
    document.getElementById("propina").textContent = propina.toFixed(0);
    document.getElementById("total-general").textContent = total.toFixed(0);
    document.getElementById("costo-inv").textContent = costoInvitado.toFixed(0);
}