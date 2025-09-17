//https://github.com/m-abdullah-2007/BSCS23017_ProductWebsite).

window.onload = function () {
  alert("Start your journey today — your next favorite book is just a click away!");

  const yearSpan = document.getElementById("currentyear");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
};

function checkStock(product) {
  if (product === "Book 5") {
    alert(product + " is Not in Stock");
  } else{
    alert(product + " is In Stock");
  }
}

const form = document.getElementById('myform');

form.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;

  if (email === '' || contact === '') {
    e.preventDefault();
    alert('Please enter both email and contact number');
    return false;
  }
  if(!email.includes('@')){
    alert("Please enter valid email address.");
    return false;
  }
  alert("Thanks! Your message has been submitted.");
  return false;
});

//chatbot


function sendMessage() {
let inputField = document.getElementById("user-input");
let input = inputField.value.toLowerCase();
let chatLog = document.getElementById("chat-log");

if (input.trim() === "") return;

let userMsg = document.createElement("p");
userMsg.textContent = "You: " + input;
chatLog.appendChild(userMsg);


let botMsg = document.createElement("p");
botMsg.textContent = "Bot: " + getBotResponse(input);
chatLog.appendChild(botMsg);


chatLog.scrollTop = chatLog.scrollHeight;


inputField.value = "";
}

function getBotResponse(input) {
if (input.includes("hello") || input.includes("hi")) {
return "Hello there! How can I help you today?";
} else if (input.includes("how are you")) {
return "I'm just a bot, but I'm doing great! Thanks for asking.";
} else if (input.includes("bye")) {
return "Goodbye! Have a great day ";
} else if (input.includes("your name")) {
return "I'm your friendly chatbot ";
} else {
return "Sorry, I didn't understand that.";
}
}