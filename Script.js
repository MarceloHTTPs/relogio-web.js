function AtualizarHoras() {
    var horario =document.querySelector(".horario");

var agora = new Date();
var horas = corrigirHorario(agora.getHours()) + ":" + corrigirHorario(agora.getMinutes()) + ":" + corrigirHorario(agora.getSeconds());

horario.textContent = horas;
}
function corrigirHorario(numero){ 
 if (numero < 10) {
        numero = '0' + numero;
}
    
return numero;
}

AtualizarHoras();

setInterval(AtualizarHoras, 1000);


console.log (horas);