const theme = document.querySelector("body");
const area = document.querySelector(".toggle__area");
const btn = document.querySelector(".toggle__switch");

area.addEventListener("click", function () {
  const active = btn.classList.contains("active");
  if (!active) {
    btn.classList.add("active");
    theme.dataset.theme = "light";
  } else if (active) {
    btn.classList.remove("active");
    theme.dataset.theme = "dark";
  }
});
