const title = document.getElementById("title");
const create = document.getElementById("create");
const logaut = document.getElementById("logaut");
const Delete = document.getElementById("delete");
const cardd = document.getElementById("carddel");
const modal = document.querySelector(".modal");
const API = "https://axiosuchunsinovapi.herokuapp.com/users";
const userData1 = JSON.parse(localStorage.getItem("userData"));

title.textContent = userData1[0];

logaut.addEventListener("click", () => {
  window.location.href = "../index.html";
});

Delete.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "../index.html";
});

create.addEventListener("click", () => {
  modal.classList.toggle("hiden");

  const foto = document.querySelector("#Photo");
  const ism = document.querySelector("#name");
  const sorname = document.querySelector("#sorname");
  const age = document.querySelector("#age");
  const submit1 = document.querySelector("#modalsumbit");
  console.log(submit1);

  submit1.addEventListener("click", (i) => {
    i.preventDefault();
    let myobj = {
      name: ism.value,
      surname: sorname.value,
      email: null,
      gender: null,
      avatar: foto.value,
      age: age.value,
    };

    fetch(API, {
      method: "POST",
      body: JSON.stringify(myobj),
      headers: { "content-type": "application/json" },
    });
  });
});

const card = document.querySelector(".hero__cards");

function getData() {
  fetch(API)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      data.map((element) => {
        element.id > 995
          ? (card.innerHTML += `
          <div  class="hero__card">
          <img
            class="hero__img"
            src="${element.avatar}"
            alt=""
            width="200"
            height="200"
          />
          <h2 class="hero__name">${element.name}</h2>
          <h2 class="hero__sorname">${element.surname}</h2>
          <p class="hero__age">${element.age}</p>
          <button class="hero__btn" onclick="deleted(${element.id})">Delete</button>
        </div>
         `)
          : null;
      });
    });
}

getData();

function deleted(x) {
  console.log(API + `/${x}`);
  fetch(API + `/${x}`, {
    method: "DELETE",
  });

  setTimeout(() => {
    window.location.reload();
  }, 2000);
}
