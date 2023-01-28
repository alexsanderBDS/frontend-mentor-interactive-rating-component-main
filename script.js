const btnEl = document.querySelector(".card-btn");
const optionEl = document.querySelectorAll(".card-option");
const cardEl = document.querySelector(".card");
const msgEl = document.querySelector(".submit-msg");
const qtdEl = document.querySelector(".submit-response span");

optionEl.forEach((el) => {
  el.addEventListener("click", function () {
    sessionStorage.setItem("optionChoice", this.textContent);
  });
});

btnEl.addEventListener("click", function () {
  let value = sessionStorage.getItem("optionChoice");

  if (value) {
    cardEl.classList.add("hidden");
    msgEl.classList.add("visible");
    qtdEl.textContent = value;
    sessionStorage.clear();
  } else {
    alert("Escolha uma opção antes");
  }
});
