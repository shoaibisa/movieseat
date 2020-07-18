const container = document.querySelector('.container');
const  seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice= +movieSelect.value;

 //count and price 
 function updateSelectCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const selectedSeatCounts = selectedSeats.length;
   
    const totalPrice = selectedSeatCounts*ticketPrice;
    count.innerHTML=selectedSeatCounts;
    total.innerHTML=totalPrice;
 }

 //Movie select event
  movieSelect.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    updateSelectCount();
  });

 //click
 container.addEventListener('click', e=>{
     if( e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
     {
         e.target.classList.toggle('selected');
         updateSelectCount();
     }
     
 });