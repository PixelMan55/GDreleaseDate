let deadline = new Date("Aug 13, 2024 12:00:00").getTime();
let x = setInterval(function() {
let date = new Date().getTime()
let tLeft = deadline-date
let days = Math.floor(tLeft / (1000 * 60 * 60 * 24));
let hours = Math.floor((tLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((tLeft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((tLeft % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours ;
document.getElementById("minute").innerHTML =minutes ;
document.getElementById("second").innerHTML =seconds ;

},1000)