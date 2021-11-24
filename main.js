let add = document.getElementById("increment");
let decrese = document.getElementById("decrement");

let int = document.getElementById("number");

let integer = 0;

add.addEventListener("click", function () {
  integer += 1;
  int.innerHTML = integer;
});

decrese.addEventListener("click", function () {
  integer -= 1;
  int.innerHTML = integer;
});
