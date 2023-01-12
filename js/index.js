let result = "";
let display = document.querySelector(".card__input");
let key = document.querySelectorAll(".card__key");

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", () => {
    if (key[i].getAttribute("id") == " ") {
      result = "";
    }
    if (key[i].getAttribute("id") == "=") {
      result = eval(result);
      let subresult = result;
      result = "";
      result = subresult;
      if (result == "Infinity") {
        result = "Error";
      }
    } else {
      result += key[i].getAttribute("id");
      console.log(key[i].getAttribute("id"));
    }
    display.value = result;
  });
}
