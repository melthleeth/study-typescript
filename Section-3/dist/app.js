"use strict";
let appid = "abc";
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log("Clicked: " + message);
}
// button.addEventListener("click", () => {
//   console.log("clicked");
// });
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "you're welcome!"));
}
//# sourceMappingURL=app.js.map