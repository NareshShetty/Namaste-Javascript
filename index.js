// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}

console.log(square(n))
console.log(square(4))
