function mostrarHora(){

    let dia = new Date();
    let hora = dia.getHours();
    let minutos = dia.getMinutes();
    let segundos = dia.getSeconds();
    let formatoHora = convertaFormato(hora);
    hora = verificaHora(hora);

    hora = addZero(hora);
    minutos = addZero(minutos);
    segundos = addZero(segundos);

    document.getElementById('clock').innerHTML = `${hora}:${minutos}:${segundos}${formatoHora}`
}

function convertaFormato(time){
    let formato = "AM";
    if(time >= 12){
        formato = "PM";
    }
    return formato;
}

function verificaHora(time){
    if(time>12){
        time = time - 12;
    }
    if (time === 0){
        time = 12;
    }
    return time;
}

function addZero(time){
    if(time<10){
        time = "0" + time;
    }
    return time;
}

mostrarHora()
setInterval(mostrarHora,1000);