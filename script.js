const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");   

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const clock = setInterval(function time() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    day.innerHTML = `${d} ${monthNames[m]} ${y}`;

    hour.textContent = h;
    minute.innerHTML = min;
    second.innerText = sec;

})
