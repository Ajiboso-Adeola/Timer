// Set the date we're counting down to
var countDown =new Date('December 25 2021 15:03:55').getTime();
// Update the count down every 1 second
var x = setInterval(function(){
  // Get todays date
  var now = new Date().getTime();
  // Find the distance between now and the count down date
       const distance = countDown - now;
  
  // Time calculations for days, hours, minutes and seconds
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
  // countdown to Zero
       hours = hours <10 ? '0' + hours : hours
       minutes = minutes <10 ? '0' + minutes : minutes
       seconds= seconds <10 ? '0' + seconds: seconds
  
       // Output to display to user
       document.getElementById('days').innerHTML =days;
       document.getElementById('hours').innerHTML =hours;
       document.getElementById('mins').innerHTML =minutes;
       document.getElementById('sec').innerHTML =seconds;
},1000)
