let dodger = document.querySelector('#dodger')
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  console.log(dodger.style.right);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  let rightNumbers = dodger.style.right.replace("px", "");
  let right = parseInt(rightNumbers, 10);
  console.log(dodger.style.right);
  if (right > 0) {
    dodger.style.right = `${right + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if(e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
