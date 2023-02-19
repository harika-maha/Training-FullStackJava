let number;
let div = document.getElementById("numbers");
for (let i = 0; i < 100; i++) {
  number = document.createElement("p");
  number.innerHTML = i;
  number.style.display = "block";
  number.style.width = "150px";
  number.style.height = "150px";
  number.style.border = "2px solid black";
  number.style.textAlign = "center";
  if (i % 2 == 0) {
    number.style.backgroundColor = "#7FEB7F";
  } else {
    number.style.backgroundColor = "#91DDF2";
  }
  document.body.appendChild(number);
}
