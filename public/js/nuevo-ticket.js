//Referencias HTML
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const generarTocket = document.querySelector('button');



const socket = io();



socket.on('connect', () => {
    // console.log('Conectado');
    //si se conecta el boton estara habilitado
    generarTocket.disable = false;
});

socket.on('disconnect', () => {
    //si esta desconectado el boton estara deshabilitado
    generarTocket.disable = true;
});

socket.on('ultimo-ticket', (ultimo)=>{
    lblNuevoTicket.innerText = 'Ticket '+ ultimo;
});





generarTocket.addEventListener( 'click', () => {

    socket.emit('siguiente-ticket',null, (ticket)=>{
        lblNuevoTicket.innerText = ticket;
    })

});

