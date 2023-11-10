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

//                                       MODULE 2_WEEK_5
//Task 1
class SimpleMarker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        const nonWhitespaceChars = text.replace(/\s/g, "").length;
        const inkRequired = nonWhitespaceChars * 0.5;
        if (this.inkLevel >= inkRequired) {
            console.log(`Printing: ${text}`);
            this.inkLevel -= inkRequired;
        } else {
            console.log("Out of ink!");
        }
    }
}

class RefillableMarker extends SimpleMarker {
    refill() {
        this.inkLevel = 100;
    }
}

const simpleMarker = new SimpleMarker("blue", 50);
simpleMarker.print("Hello, World!");
simpleMarker.print("test 1");
simpleMarker.print("Out of ink?");

const refillableMarker = new RefillableMarker("red", 80);
refillableMarker.print("Refillable marker test.");
refillableMarker.refill();
refillableMarker.print("After refill.");


//Task 2
class ExtendedDate extends Date {
    constructor() {
        super();
    }

    formatDateText() {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const day = this.getDate();
        const month = months[this.getMonth()];
        return `${day} ${month}`;
    }


    isFutureOrPresent() {
        const currentDate = new Date();
        return this > currentDate;
    }


    isLeapYear() {
        const year = this.getFullYear();
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return true;
        }
        return false;
    }


    getNextDate() {
        const nextDate = new Date(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}


const myDate = new ExtendedDate();

console.log("Date by text:", myDate.formatDateText());
console.log("Future or past date:", myDate.isFutureOrPresent() ? "future" : "past");
console.log("Is it a leap year?:", myDate.isLeapYear() ? "Yes" : "No");
console.log("Next date:", myDate.getNextDate());


//Task 3

class Employee {
    constructor(id, name, position, department) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.department = department;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let tableHtml = '<table>';
        tableHtml += '<tr><th>ID</th><th>Name</th><th>Position</th><th>Department</th></tr>';

        for (const employee of this.employees) {
            tableHtml += '<tr>';
            tableHtml += `<td>${employee.id}</td>`;
            tableHtml += `<td>${employee.name}</td>`;
            tableHtml += `<td>${employee.position}</td>`;
            tableHtml += `<td>${employee.department}</td>`;
            tableHtml += '</tr>';
        }

        tableHtml += '</table>';
        return tableHtml;
    }
}

const bankEmployees = [
    new Employee(1, 'John Doe', 'Manager', 'Finance'),
    new Employee(2, 'Jane Smith', 'Accountant', 'Finance'),
    new Employee(3, 'Bob Johnson', 'Teller', 'Customer Service'),
];
document.addEventListener('DOMContentLoaded', function () {
    const empTable = new EmpTable(bankEmployees);
    const tableHtml = empTable.getHtml();
    document.getElementById('employeeTable').innerHTML = tableHtml;
});


//Task 4
const employees = [
    { name: 'Boba', position: 'junior', salary: 500 },
    { name: 'Biba', position: 'middle', salary: 500 },
    { name: 'BibaAndBoba', position: 'Senior', salary: 100 }
];

document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('employeeTable2');

    employees.forEach(employee => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        nameCell.innerHTML = employee.name;
        const positionCell = row.insertCell(1);
        positionCell.innerHTML = employee.position;
        const salaryCell = row.insertCell(2);
        salaryCell.innerHTML = employee.salary;
    });
});


