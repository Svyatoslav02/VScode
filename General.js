function sayHello() {
    let userName;
    while (true) {
        userName = prompt("Enter your name:");
        if (userName === null || userName === "") { alert("Try again or cancel to exit"); }
        else { break; }
    }
    if (userName !== null) {
        alert("Hello " + userName);
    }
}
function userAge() {
    const currentYear = new Date().getFullYear();
    const brtYear = prompt("Enter your birthday:");
    if (brtYear) {
        const year = parseInt(brtYear);
        if (!isNaN(year)) {
            const age = currentYear - year;
            alert("You have " + age + "years")
        } else {
            alert("Try again");
        }
    } else {
        alert("You cancel try , try in another time ");
    }
}
function Squere() {
    let sideA = prompt("Enter side:");
    if (!isNaN(sideA) && sideA > 0) {
        let P = sideA * 4;
        alert("P= " + P);
    } else { alert("Try again"); }
}
function radius() {
    let radius = prompt("Enter radius:");
    if (!isNaN(radius) && radius > 0) {
        let area = Math.PI * Math.pow(radius, 2);
        alert("Area of circle = " + area);
    }
    else { alert("Try again"); }
}
function distance() {
    let distance = prompt('Enter the distance between cities (in kilometers)');
    let time = prompt("Enter the time you want to get there (in hours):");
    let d = parseFloat(distance);
    let t = parseFloat(time);
    if (!isNaN(d) && !isNaN(t) && t > 0) {
        let speed = d / t;
        alert("You need to move with speed to make it in time \t" + speed);
    } else { alert("Try again"); }
}
function convertDollarsToEuros() {
    function converter(dollars) {
        const exchangeRate = 0.85;
        const euro = dollars * exchangeRate;
        return euro;
    }
    let userInput = prompt("Enter sum in dollar to convertedin euro:");
    let dollars = parseFloat(userInput);
    if (!isNaN(dollars)) {
        let euro = converter(dollars);
        alert(`${dollars} dollars = ${euro} euros`)
    } else {
        alert("please enter right sum");
    }
}
function getSize() {
    let flashSize = prompt("Enter size of your flashDrive in GB:");
    let flashSizeGb = parseFloat(flashSize);
    if (!isNaN(flashSize)) {
        let fileSize = 820;
        let flashDriverSize = flashSizeGb * 1024;
        let fileCount = Math.floor(flashDriverSize / fileSize);
        alert(`In flashDriver ${flashSize} will fit ${fileCount} size 820 MB`);
    } else { alert("Enter the right size of your flash"); }
}
function pocketMoney() {
    let userPocketMoney = parseFloat(prompt("Enter how much money you have:"));
    let costsChocolateBar = parseFloat(prompt("Enter how much one chocolate bar costs:"));
    if (!isNaN(userPocketMoney) && !isNaN(costsChocolateBar)) {
        if (costsChocolateBar > 0) {
            const chocolateBarsCount = Math.floor(userPocketMoney / costsChocolateBar);
            const change = userPocketMoney % costsChocolateBar;

            if (chocolateBarsCount > 0) {
                alert(`You can buy ${chocolateBarsCount} chocolate bars and your change will be ${change} money.`);
            } else {
                alert("You don't have enough money to buy a chocolate bar.");
            }
        } else {
            alert("Please enter a valid cost for the chocolate bar.");
        }
    } else {
        alert("Please enter valid numeric values.");
    }
}
function findFourDigitPalindrome() {
    let userInput = prompt("Enter a four-digit number:");
    let number = parseInt(userInput);

    if (!isNaN(number) && number >= 1000 && number <= 9999) {
        let thousands = Math.floor(number / 1000);
        let hundreds = Math.floor((number / 100) % 10);
        let tens = Math.floor((number / 10) % 10);
        let ones = number % 10;
        let palindrome = ones * 1000 + tens * 100 + hundreds * 10 + thousands;

        alert(`The palindrome of the number ${number} is ${palindrome}.`);
    } else {
        alert("Please enter a valid four-digit number.");
    }
}
function checkEvenOrOdd() {
    let userInput = prompt("Enter an number:");
    let isEven = userInput % 2 === 0;
    let result = isEven ? "even" : "odd";
    alert(`You entered the number ${userInput}, which is ${result}`);
}


//checkEvenOrOdd();
//findFourDigitPalindrome();
//pocketMoney();
//getSize();
//convertDollarsToEuros();
//distance();
//radius();
//Squere();
//userAge();
//sayHello();