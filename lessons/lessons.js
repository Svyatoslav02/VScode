/*block 1*/
let textVisible = true;

function toggleText() {
    let textElement = document.getElementById('text');
    let toggleButton = document.getElementById('Button');

    if (textVisible) {
        textElement.style.display = 'none';
        toggleButton.innerText = 'view text';
    } else {
        textElement.style.display = 'block';
        toggleButton.innerText = 'hide text';
    }

    textVisible = !textVisible;
}
/*block 2*/
const arr = document.querySelectorAll('button');
const text = ['Text  1', 'Text  2', 'Text  3'];
const txt = document.getElementById('id');

let tmp = 0;
arr.forEach(i => {
    i.setAttribute('txt', text[tmp]);
    tmp++;
    i.addEventListener('click', () => {
        txt.innerText = i.getAttribute('txt');
    })
})
/*block 3*/
const mouseTracker = document.getElementById('mouse-tracker');
const mouseCoordinates = document.getElementById('mouse-coordinates');
const mouseClick = document.getElementById('mouse-click');

mouseTracker.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    mouseCoordinates.innerText = `Mouse coordinates: X=${x}, Y=${y}`;
});

mouseTracker.addEventListener('mousedown', (e) => {
    const button = e.button;
    const buttonName = button === 0 ? 'left button' : 'right button';
    mouseClick.innerText = `pressed: ${buttonName}`;
});
/*block 4 */
const generateButton = document.getElementById('generate-button');
const randomNumber = document.getElementById('random-number');

generateButton.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 101);
    randomNumber.textContent = `A random number: ${random}`;
});

/*block 5 */
const numberInput = document.getElementById('number-input');
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');

incrementButton.addEventListener('click', () => {
    const currentValue = parseInt(numberInput.value);
    numberInput.value = currentValue + 1;
});

decrementButton.addEventListener('click', () => {
    const currentValue = parseInt(numberInput.value);
    numberInput.value = currentValue - 1;
});

/*block 6 */
const addBlockButton = document.getElementById('add-block-button');
const blocksContainer = document.getElementById('blocks-container');

addBlockButton.addEventListener('click', () => {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.backgroundColor = getRandomColor();
    block.onclick = () => blocksContainer.removeChild(block);
    blocksContainer.appendChild(block);
});

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;