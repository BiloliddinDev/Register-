const Name = document.getElementById("user");
const password3 = document.getElementById("password3");
const btn1 = document.getElementById("submit");
const error1 = document.getElementById("error");

btn1.addEventListener("click", (i) => {
  i.preventDefault();
  const userData1 = JSON.parse(localStorage.getItem("userData"));
  if (!userData1) error1.textContent = "Siz Royhatdan Otmagansiz";
  setTimeout(() => {
    error1.textContent = "";
  }, 1000);
  if (Name.value && password3.value) {
    if (Name.value == userData1[0] && password3.value == userData1[1]) {
      window.location.href = "../main.html";
    } else {
      error1.textContent = "parol yoki username xato !";
    }
  } else {
    error1.textContent = "Inputlarni Toliq toldring";
    setTimeout(() => {
      error1.textContent = "";
    }, 1000);
  }
});
