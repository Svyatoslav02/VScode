/*New Task*/ 
function analyzeString(inputString) {
    let letterCount = 0;
    let digitCount = 0;
    let otherCount = 0;

    for (let char of inputString) {
        if (char.match(/[a-zA-Z]/)) {
            letterCount++;
        } else if (char.match(/\d/)) {
            digitCount++;
        } else {
            otherCount++;
        }
    }

    console.log(`Letters: ${letterCount}, Digits: ${digitCount}, Others: ${otherCount}`);
}

analyzeString("Hello123!@#");
/*New Task*/ 

function numberToWords(number) {
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number === 0) {
        return "zero";
    }

    let result = "";

    if (number >= 10 && number <= 19) {
        result = teens[number - 10];
    } else {
        result = tens[Math.floor(number / 10)];
        result += (number % 10 !== 0) ? ` ${units[number % 10]}` : "";
    }

    return result;
}

console.log(numberToWords(35)); 
console.log(numberToWords(89)); 
console.log(numberToWords(12)); 

/*New Task*/ 
function replaceChars(inputString) {
    let result = "";

    for (let char of inputString) {
        if (char.match(/[A-Z]/)) {
            result += char.toLowerCase();
        } else if (char.match(/[a-z]/)) {
            result += char.toUpperCase();
        } else if (char.match(/\d/)) {
            result += '_';
        } else {
            result += char;
        }
    }

    console.log(result);
}

replaceChars("AbCdEf123");

/*New Task*/ 
function camelCaseCSS(cssStyle) {
    return cssStyle.replace(/-([a-z])/g, function(match, letter) {
        return letter.toUpperCase();
    });
}

console.log(camelCaseCSS("font-size")); 
console.log(camelCaseCSS("background-color")); 
console.log(camelCaseCSS("text-align")); 

/*New Task*/ 
function createAbbreviation(phrase) {
    return phrase.split(' ').map(word => word[0].toUpperCase()).join('');
}


console.log(createAbbreviation("cascading style sheets")); 
console.log(createAbbreviation("object-oriented programming")); 
function concatenateStrings(...strings) {
    return strings.join(' ');
}

console.log(concatenateStrings("Hello", "world", "!")); 

/*New Task*/ 
function calculator(expression) {
    return eval(expression);
}


console.log(calculator("10 + 5")); 
console.log(calculator("20 * 3")); 
function parseURL(url) {
    let urlObject = new URL(url);
    console.log(`Протокол: ${urlObject.protocol}, Домен: ${urlObject.hostname}, Шлях: ${urlObject.pathname}`);
}

parseURL("https://itstep.org/ua/about");

/*New Task*/ 
function splitString(inputString, delimiter) {
    let result = [];
    let start = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === delimiter) {
            result.push(inputString.slice(start, i));
            start = i + 1;
        }
    }

    result.push(inputString.slice(start));

    console.log(result);
}

splitString("10/08/2020", "/");

/*New Task*/ 
function printFormattedText(template, ...values) {
    let result = template;

    for (let i = 0; i < values.length; i++) {
        result = result.replace(`%${i + 1}`, values[i]);
    }

    console.log(result);
}

printFormattedText("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
