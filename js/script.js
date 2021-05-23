var button = document.querySelector("button");
var modal = document.querySelector(".modal");
var modalx = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  button.innerText = "You've got this!";
  modal.classList.add("show-modal");
});

modalx.addEventListener("click", function () {
  button.innerText = "Who's got this?";
  modal.classList.remove("show-modal");
});
