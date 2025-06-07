let randomNumber = Math.floor(Math.random() * 10) + 1;

function clickAction() {
  let userInput = document.getElementById("inputText");
  console.log(userInput.value);

  if (userInput.value == randomNumber) {
    document.getElementById("result").innerHTML = "You Won";
    document.getElementById("imageBox").innerHTML = `img
        width="300px"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fwinning-dance-gifs&psig=AOvVaw3e1XH99AqOcGk2y4gBanku&ust=1749378806980000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOj1zJuO340DFQAAAAAdAAAAABAy"
        alt="Winner"
      />`;
  } else if (userInput.value > randomNumber) {
    document.getElementById("result").innerHTML = "Too high! Try again...";
  } else if (userInput.value < randomNumber) {
    document.getElementById("result").innerHTML = "Too low! Try again...";
  }
}

let customerList = [
  {
    name: "saman",
    email: "saman@gmail.com",
    address: "gampaha",
  },
  {
    name: "kamal",
    email: "kamal@gmail.com",
    address: "matara",
  },
  {
    name: "nimal",
    email: "nimal@gmail.com",
    address: "panadura",
  },
  {
    name: "wimal",
    email: "wimal@gmail.com",
    address: "walana",
  },
  {
    name: "sunimal",
    email: "sunmal@gmail.com",
    address: "anuradhapura",
  },
];

let customerTable = document.getElementById("tblCustomer");

let body = "";

customerList.forEach((customer) => {
  body += `<tr>
       <td>${customer.name}</td>
       <td>${customer.email}</td>
       <td>${customer.address}</td>     
    <tr>`;
});
console.log(body);
customerTable.innerHTML = body;
