//Referencias HTML
const lblTicket2 = document.querySelector('#lblTicket2');
const lblTicket3 = document.querySelector('#lblTicket3');
const lblTicket1 = document.querySelector('#lblTicket1');
const lblTicket4 = document.querySelector('#lblTicket4');
const escritorio1 = document.querySelector('#lblEscritorio1')
const escritorio2 = document.querySelector('#lblEscritorio2')
const escritorio3 = document.querySelector('#lblEscritorio3')
const escritorio4 = document.querySelector('#lblEscritorio4')




const socket = io();


socket.on('estado-actual', (ultimos4)=>{

    const audio = new Audio('./audio/new-ticket.mp3');
    audio.play();  
 

    const [ticket1,ticket2,ticket3,ticket4] = ultimos4;

    if(ticket1){
        lblTicket1.innerText = 'Ticket ' + ticket1.numero;
        escritorio1.innerText =  ticket1.escritorio;
    }

    if(ticket2){
        lblTicket2.innerText = 'Ticket ' + ticket2.numero;
        escritorio2.innerText =  ticket2.escritorio;
    }
    
    if(ticket3){
        lblTicket3.innerText = 'Ticket ' + ticket3.numero;
        escritorio3.innerText = ticket3.escritorio;
    }
    if(ticket4){
        lblTicket4.innerText = 'Ticket ' + ticket4.numero;
        escritorio4.innerText = ticket4.escritorio;
    }
});