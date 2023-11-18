//TASK_1
function addMessage() {
    let username = document.getElementById('username').value;
    let messageText = document.getElementById('message').value;

    if (username && messageText) {
        let messageList = document.getElementById('message-list');

        let messageItem = document.createElement('li');
        messageItem.className = 'message';

        let messageHeader = document.createElement('div');
        messageHeader.className = 'messageHeader';

        let usernameDiv = document.createElement('div');
        usernameDiv.textContent = username + ' ';

        let dateDiv = document.createElement('div');
        dateDiv.textContent = getCurrentDate();

        messageHeader.appendChild(usernameDiv);
        messageHeader.appendChild(dateDiv);

        let messageBody = document.createElement('div');
        messageBody.textContent = messageText;

        messageItem.appendChild(messageHeader);
        messageItem.appendChild(messageBody);

        messageList.appendChild(messageItem);
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Enter all form');
    }
}
function getCurrentDate() {
    let currentDate = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}
/*********************TASK_2**************************/
function submitQuiz() {
    let correctAnswers = 0;

    if (document.querySelector('input[name="q1"]:checked').value === 'if') {
        correctAnswers++;
    }

    if (document.querySelector('input[name="q2"]:checked').value === '10') {
        correctAnswers++;
    }

    alert('You give ' + correctAnswers + ' right answers ' + document.querySelectorAll('.question').length + ' question.');
}
/*********************TASK_3**************************/

function showStyledText(event) {
    event.preventDefault();

    var inputText = document.getElementById('input-text').value;
    var fontSize = document.getElementById('font-size').value + 'px';
    var fontColor = document.getElementById('font-color').value;
    var isBold = document.getElementById('bold').checked;
    var isItalic = document.getElementById('italic').checked;
    var alignment = document.getElementById('alignment').value;

    var styledTextElement = document.getElementById('styled-text');
    styledTextElement.innerHTML = inputText;

    styledTextElement.style.fontSize = fontSize;
    styledTextElement.style.color = fontColor;
    styledTextElement.style.fontWeight = isBold ? 'bold' : 'normal';
    styledTextElement.style.fontStyle = isItalic ? 'italic' : 'normal';
    styledTextElement.style.textAlign = alignment;
}
/*********************TASK_4**************************/

function confirmOrder(event) {
    event.preventDefault();

    let selectedBook = document.getElementById('book').value;
    let quantity = document.getElementById('quantity').value;
    let name = document.getElementById('name').value;
    let deliveryDate = document.getElementById('delivery-date').value;
    let address = document.getElementById('address').value;
    let comment = document.getElementById('comment').value;

    let confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerHTML = `${name}, thank you for your order. ${quantity} copy/copies of "${selectedBook}" will be delivered on ${deliveryDate} to the address: ${address}.`;

    if (comment) {
        confirmationMessage.innerHTML += ` Comment: ${comment}.`;
    }
    document.getElementById('order-form').reset();
}
/*********************TASK_5**************************/

let directionsData = ["Direction 1", "Direction 2"];
let datesData = ["2023-01-01", "2023-01-02", "2023-01-03"];
let bookedTicketsData = [];

function bookTickets(event) {
    event.preventDefault();

    let selectedDirection = document.getElementById('direction').value;
    let selectedDate = document.getElementById('date').value;
    let selectedSeats = Array.from(document.getElementById('seats').selectedOptions).map(option => option.value);

    let bookingRecord = {
        direction: selectedDirection,
        date: selectedDate,
        seats: selectedSeats
    };

    bookedTicketsData.push(bookingRecord);

    displayBookedTickets();
}

function displayBookedTickets() {
    let bookedTicketsList = document.getElementById('booked-tickets');
    bookedTicketsList.innerHTML = '<h2>Booked Tickets:</h2>';

    bookedTicketsData.forEach(record => {
        let recordInfo = document.createElement('p');
        recordInfo.textContent = `Direction: ${record.direction}, Date: ${record.date}, Booked Seats: ${record.seats.join(', ')}`;
        bookedTicketsList.appendChild(recordInfo);
    });
}

generateDateOptions();