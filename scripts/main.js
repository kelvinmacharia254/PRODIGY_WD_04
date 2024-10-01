// GUI elements
const yearDisplay = document.getElementById("year-display");

let date = new Date();
let year = date.getFullYear();

console.log(year);
yearDisplay.textContent = `Copyright @${year}`;