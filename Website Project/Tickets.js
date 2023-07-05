//add form validation:

const form = document.querySelector('#ticket-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ticketsInput = document.querySelector('#tickets');
const cardInput = document.querySelector('#card');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validateName(nameInput.value)) {
    return alert('Please enter a valid name');
  }

  if (!validateEmail(emailInput.value)) {
    return alert('Please enter a valid email address');
  }

  if (!validateTickets(ticketsInput.value)) {
    return alert('Please enter a valid number of tickets');
  }

  if (!validateCard(cardInput.value)) {
    return alert('Please enter a valid credit card number');
  }

  //alert('Thank you for your purchase!');
});

function validateName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateTickets(tickets) {
  return /^[1-9][0-9]*$/.test(tickets);
}

function validateCard(card) {
  return /^\d{16}$/.test(card);
}

//display a confirmation message to the user:
// Your existing JavaScript code

/********document.getElementById("ticket-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  var name = document.getElementById("name").value;
  var tickets = document.getElementById("tickets").value;
  var message = "Thank you for purchasing " + tickets + " ticket(s), " + name + "!";
  alert(message);
});*/

// Your existing JavaScript code

// Display a custom dialog box to the user
const dialogBox = document.getElementById('dialog-box');
const dialogMessage = document.getElementById('dialog-message');
const dialogButton = document.getElementById('dialog-button');
document.getElementById('ticket-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  var name = document.getElementById('name').value;
  var tickets = document.getElementById('tickets').value;
  if (tickets > 1 )
  {

    var message = 'Thank you for purchasing ' + tickets + ' tickets, ' + name + '!' + '\n' + 'Your tickets have been reserved. We will send you a confirmation email shortly';
    
  }
  else
  {

    var message = 'Thank you for purchasing ' + tickets + ' ticket, ' + name + '!' + '\n' + 'Your ticket have been reserved. We will send you a confirmation email shortly';

  }
  
  dialogMessage.textContent = message;
  dialogBox.style.display = 'flex';
});

// Close the custom dialog box when the user clicks the OK button
dialogButton.addEventListener('click', function() {
  dialogBox.style.display = 'none';
});