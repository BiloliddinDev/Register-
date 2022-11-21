let usernmame = document.getElementById("name");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let btn = document.getElementById("submit");
let error = document.getElementById("err");

let data = [];

btn.addEventListener("click", (element) => {
  element.preventDefault();
  if (usernmame.value && password.value && password2.value) {
    if (password.value == password2.value) {
      data.push(usernmame.value, password.value);
      localStorage.setItem("userData", JSON.stringify(data));
      window.location.href = "../main.html";
    } else {
      error.textContent = "Parrolar xar xil";
      setTimeout(() => {
        error.textContent = "";
      }, 1000);
    }
  } else {
    error.textContent = "Input toldring ...";
    setTimeout(() => {
      error.textContent = "";
    }, 1000);
  }
});
