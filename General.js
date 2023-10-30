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
        alert("You need to move with speed to make it in time \t"+ speed);
    } else { alert("Try again"); }
}
//distance();
//radius();
//Squere();
//userAge();
//sayHello();