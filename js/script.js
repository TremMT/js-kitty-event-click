/*var button = document.querySelector(".show-cat");
//console.log(button);

var cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function () {
  cat.classList.add("show");
});
//console.log("It works!");*/

//Adding If and Else Statements
var button = document.querySelector(".show-cat");

var cat = document.querySelector(".cat");

button.addEventListener("click", function () {
  //cat.classList.add("show");
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
    //  console.log("Yes");
  } else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!!";
    button.classList.remove("disappear");
  }
  //  console.log("No..");
});