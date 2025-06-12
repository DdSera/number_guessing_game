let randomNumber = Math.floor(Math.random() * 10) + 1;

function clickAction() {
  let userInput = document.getElementById("inputText");
  console.log(userInput.value);

  if (userInput.value > 10 || userInput.value < 0) {
    document.getElementById("result").innerHTML = "Please Enter Valid Input";
  }

  if (userInput.value == randomNumber) {
    document.getElementById("result").innerHTML = "You Won";
    document.getElementById("imageBox").innerHTML = `<img
        width="300px" height="300px"
        src="https://media1.tenor.com/m/XKVZDttTe1wAAAAC/happy-dance-excited.gif"
        alt="Winner"
      />`;
    //alert("Winner");
  } else if (userInput.value > randomNumber) {
    document.getElementById("result").innerHTML = "Too high! Try again...";
    document.getElementById("imageBox").innerHTML = `<img
        width="300px" height="300px"
        src="https://i.pinimg.com/originals/ec/3e/b3/ec3eb3ac15a0584f0766b365f443d953.gif"
        alt="Winner"
      />`;
  } else if (userInput.value < randomNumber) {
    document.getElementById("result").innerHTML = "Too low! Try again...";
    document.getElementById("imageBox").innerHTML = `<img
        width="300px" height="300px"
        src="https://media.tenor.com/5zzFKqhUXC4AAAAM/wee-ride.gif"
        alt="Winner"
      />`;
  }
}

// let attemptsArray = [];
// do {} while (userInput.value != randomNumber);

// let customerList = [
//   {
//     name: "saman",
//     email: "saman@gmail.com",
//     address: "gampaha",
//   },
//   {
//     name: "kamal",
//     email: "kamal@gmail.com",
//     address: "matara",
//   },
//   {
//     name: "nimal",
//     email: "nimal@gmail.com",
//     address: "panadura",
//   },
//   {
//     name: "wimal",
//     email: "wimal@gmail.com",
//     address: "walana",
//   },
//   {
//     name: "sunimal",
//     email: "sunmal@gmail.com",
//     address: "anuradhapura",
//   },
// ];

// let customerTable = document.getElementById("tblCustomer");

// let body = "";

// customerList.forEach((customer) => {
//   body += `<tr>
//        <td>${customer.name}</td>
//        <td>${customer.email}</td>
//        <td>${customer.address}</td>
//     <tr>`;
// });
// console.log(body);
// customerTable.innerHTML = body;
