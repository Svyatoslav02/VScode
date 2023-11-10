function validateInput(event) {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    const sanitizedValue = inputValue.replace(/\d/g, '');
    inputElement.value = sanitizedValue;
}
//TASK 2
function openModal() {
    document.getElementById('myModal').style.display = 'flex';
    document.getElementById('closeBtn').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('closeBtn').style.display = 'none';
}
//TASK 3
function moveBall(event) {
    const field = document.getElementById('field');
    const ball = document.getElementById('ball');

    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    const fieldX = fieldRect.left;
    const fieldY = fieldRect.top;

    let mouseX = event.clientX - fieldX - ballRect.width / 2;
    let mouseY = event.clientY - fieldY - ballRect.height / 2;

    mouseX = Math.max(0, Math.min(mouseX, fieldRect.width - ballRect.width));
    mouseY = Math.max(0, Math.min(mouseY, fieldRect.height - ballRect.height));

    ball.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}
//Task 4
function changeLight() {
    const lights = document.querySelectorAll('.light');

    lights.forEach(light => {
        if (light.classList.contains('red')) {
            light.classList.toggle('red');
            light.classList.toggle('green');
        } else if (light.classList.contains('green')) {
            light.classList.toggle('green');
            light.classList.toggle('yellow');
        } else if (light.classList.contains('yellow')) {
            light.classList.toggle('yellow');
            light.classList.toggle('red');
        }
    });
}
//Task 5
let selectedBook = null;

function toggleBookColor(book) {
    if (selectedBook) {
        selectedBook.classList.remove('selected');
    }
    book.classList.add('selected');
    selectedBook = book;
}
//Task 6 
function showTooltip(button) {
    const tooltip = button.nextElementSibling;
    const buttonRect = button.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    if (buttonRect.top >= tooltipRect.height) {
        tooltip.style.top = "-30px";
    } else {
        tooltip.style.top = "30px";
    }
}
//Task 7
function toggleList(element) {
    let nestedList = element.querySelector('.nested');
    if (nestedList) {
        nestedList.classList.toggle('active');
        element.querySelector('.caret').classList.toggle('caret-down');
    }
}