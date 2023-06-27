let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByName("z"));

c = buttons.map((e) => e.value);
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    c = buttons.map((e) => e.value);
    switch (e.target.value) {
      case "cancel":
        display.value = "";
        break;
      case "=":
        try {
          display.value = eval(display.value);
        } catch {
          alert("undefined");

          display.value = "ERROR!";
        }

        break;
      default:
        display.value += e.target.value;
    }
  });
});

// result = buttons.map((e) => e.value);
// console.log(result);
// result = buttons.map((button) => {
//   addEventListener("click", (e) => {
//     console.log("clicked");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.value);
//     switch (e.target.value) {
//       default:
//         display.value += e.target.value;
//     }
//   });
// });
