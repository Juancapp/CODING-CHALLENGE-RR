var pacman;
var ghost;
var cookie;

window.addEventListener("DOMContentLoaded", function () {
  pacman = document.getElementById("pacman");
  ghost = document.getElementById("ghost");
  cookie = document.getElementById("cookie");
  console.log(pacman);
  console.log(ghost);
});

function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}

function move(event) {
  switch (event.keyCode) {
    case 38:
      var currentPosition = parseInt(getComputedStyle(pacman).top);
      pacman.style.top = currentPosition - 5 + "px";
      break;
    case 40:
      var currentPosition = parseInt(getComputedStyle(pacman).top);
      pacman.style.top = currentPosition + 5 + "px";
      break;
    case 37:
      var currentPosition = parseInt(getComputedStyle(pacman).left);
      pacman.style.left = currentPosition - 5 + "px";
      break;
    case 39:
      var currentPosition = parseInt(getComputedStyle(pacman).left);
      pacman.style.left = currentPosition + 5 + "px";
      break;
  }

  if (elementsOverlap(pacman, ghost)) {
    alert("You lost");
    return (pacman.style = {
      top: 0,
      left: 0,
    });
  }

  if (elementsOverlap(pacman, cookie)) {
    alert("¡Congrats! You won");
    return (pacman.style = {
      top: 0,
      left: 0,
    });
  }
}

document.addEventListener("keydown", move);
