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

  var optimizedPositions = {
    top: domRect1.top + 8,
    right: domRect1.right - 13,
    bottom: domRect1.bottom - 8,
    left: domRect1.left + 8,
  };

  return !(
    optimizedPositions.top > domRect2.bottom ||
    optimizedPositions.right < domRect2.left ||
    optimizedPositions.bottom - 8 < domRect2.top ||
    optimizedPositions.left + 8 > domRect2.right
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
