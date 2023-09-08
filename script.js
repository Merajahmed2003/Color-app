let bg = document.querySelector("body");
let div = document.querySelector("div");
let Cname = document.querySelector(".color");
let color = [
  
  "grey",
  "black",
  "Pink",
  "orange",
  "blue",
  "Green",
  "Purple",
  "Blue",
];
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
  div.innerHTML += `<button style="background-color: ${color[i]};" onclick="colors(${i});" >${color[i]}</button>`;
}
function colors(i) {
  Cname.innerHTML += `<p style="font-size: 30px;color:${color[i]}; position:relative;  line-height: 0%;
  ">${color[i]} <span style="color:white;"> ,</span></p> `;
}