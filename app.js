let randomNumber = Math.floor(Math.random() * 10) + 1;

function clickAction() {
  let userInput = document.getElementById("inputText");
  console.log(userInput.value);

  if (userInput.value == randomNumber) {
    document.getElementById("result").innerHTML = "You Won";
  } else if (userInput.value > randomNumber) {
    document.getElementById("result").innerHTML = "Too high! Try again...";
  } else if (userInput.value < randomNumber) {
    document.getElementById("result").innerHTML = "Too low! Try again...";
  }
}
