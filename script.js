const output = document.getElementById("output");


let myColor = ["Red", "Green", "White", "Black"];
output.innerHTML += `<b>Join Array:</b><br>`;
output.innerHTML += myColor.join(",") + "<br>";
output.innerHTML += myColor.join("+") + "<br><br>";

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let freq = {};
let max = 0, result = null;
arr1.forEach(e => {
  freq[e] = (freq[e] || 0) + 1;
  if (freq[e] > max) {
    max = freq[e];
    result = e;
  }
});
output.innerHTML += `<b>Most Frequent:</b><br>${result} ( ${max} times )<br><br>`;


function truncateString(str, num) {
  return str.slice(0, num);
}
output.innerHTML += `<b>Truncate:</b><br>${truncateString("Robin Singh", 4)}<br><br>`;

function capitalizeWords(str) {
  return str.split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
}
output.innerHTML += `<b>Capitalize:</b><br>${capitalizeWords("js string exercises")}<br><br>`;


function arrBetween(a, b, arr) {
  return arr.filter(n => n > a && n < b);
}
output.innerHTML += `<b>arrBetween:</b><br>`;
output.innerHTML += JSON.stringify(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) + "<br>";
output.innerHTML += JSON.stringify(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) + "<br>";
