//----date format----//

const d = new Date("2023-12-11");
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const formattedDate = `${months[d.getMonth()]} ${d.getUTCDate()}, ${d.getFullYear()}`;
    document.getElementById("creation").innerHTML = formattedDate;

var currentDate = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var dateString = currentDate.toLocaleDateString(undefined, options);
    document.getElementById('dateDisplay').textContent = dateString;


const date = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = dateString;   