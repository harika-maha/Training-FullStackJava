// var line1 = document.getElementsByClassName("line-1")[0];
// console.log(line1.innerHTML);
// line1.innerHTML = "<b>WEALTH ANALYSED</b>";

// var ptags = document.getElementsByTagName("p")[0];
// ptags.style.color = "black";

// var line2 = document.getElementById("line2");
// line2.innerHTML = "HELLO WORLD!";

var modalbg = document.querySelector(".modal-bg");
var login = document.getElementById("login");
var modalClose = document.querySelector(".modal-close");
login.addEventListener("click", () => {
  modalbg.classList.add("bg-active");
});
modalClose.addEventListener("click", () => {
  modalbg.classList.remove("bg-active");
});
var log = {
  userid: "admin",
  password: "admin",
};

var logUser = {
  userid: "user",
  password: "user",
};

var users = [log, logUser];

var btn = document.querySelector(".buttonLogin");

btn.addEventListener("click", () => {
  var id = document.querySelector(".userid");
  var pwd = document.querySelector(".password");
  var name = document.querySelector(".name");
  var currUser = users.find((user) => user.userid === id.value);
  if (pwd.value == currUser.password) {
    modalbg.classList.remove("bg-active");
    name.innerHTML = `Welcome, <span style="color:orange;">${currUser.userid}</span>`;
  }
  id.value = "";
  pwd.value = "";
});
