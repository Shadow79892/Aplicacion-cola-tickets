//Referencias HTML
const lblEscritorio = document.querySelector('h1');
const btnAtender = document.querySelector('button');
const lblTicket = document.querySelector('small');
const lblAlert = document.querySelector('.alert');
const cola = document.querySelector('#lblPendientes');






const searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = escritorio;

lblAlert.style.display = 'none';


const socket = io();



socket.on('connect', () => {
    // console.log('Conectado');
    //si se conecta el boton estara habilitado
    btnAtender.disable = false;

    
});


socket.on('disconnect', () => {
    //si esta desconectado el boton estara deshabilitado
    btnAtender.disable = true;
});

socket.on('tickets-pendientes', (pendientes)=>{
    
    cola.innerText = pendientes;
    
});







btnAtender.addEventListener( 'click', () => {

    socket.emit('atender-ticket',{escritorio}, ({ok,ticket,msg})=>{
        if(!ok){
            lblTicket.innerText = 'Nadie';
            return lblAlert.style.display = ''; 
        }

        lblTicket.innerText = 'Ticket ' + ticket.numero;
    })
});