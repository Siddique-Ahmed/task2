// let keyPressTime = 0;

// document.addEventListener("keydown", (event) => {
//   if (keyPressTime === 0) {
//     keyPressTime = Date.now();
//   }
// });

// document.addEventListener("keyup", (event) => {
//   if (keyPressTime !== 0) {
//     let keyReleaseTime = Date.now();
//     let duration = keyReleaseTime - keyPressTime;
//     keyPressTime = 0;

//     let disDuration = document.getElementById("duration");
//     let disKey = document.getElementById("key");
//     disDuration.innerHTML = duration;
//     disKey.innerHTML = event.key
//   }
// });

let keyPressTime = 0;

document.addEventListener("keydown", (event) => {
  if (keyPressTime === 0) {
    keyPressTime = Date.now();
  }
});

document.addEventListener("keyup", (event) => {
  if (keyPressTime !== 0) {
    let keyReleaseTime = Date.now();
    let duration = keyReleaseTime - keyPressTime;
    keyPressTime = 0;

    let disKey = document.querySelector("#key");
    let disDuration = document.querySelector("#duration");

    disDuration.innerHTML = duration;
    disKey.innerHTML = event.key;
  }
});
