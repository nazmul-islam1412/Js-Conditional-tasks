let citizen='Student';
let ticketPrice=800;

if(citizen < 10){
   let discount=800*(100/100);
    ticketPrice-=ticketPrice-discount;
    console.log("Get free ticket");
}
else if(citizen == 'Student'){
    discount=800*(50/100);
     ticketPrice-=ticketPrice-discount;
    console.log("Get 50% discount",ticketPrice);
}
else if(citizen >= 60){
    discount=800*(15/100);
     ticketPrice-=ticketPrice-discount;
    console.log("Get 15% discount=",ticketPrice);
}
else{
    console.log("Paid full payment=",ticketPrice);
}