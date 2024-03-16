function checkStringLength(inputString, maxLength) {
	const stringWithoutSpaces = inputString.replace(/\s/g, "");
	return stringWithoutSpaces.length <= maxLength;
}

console.log(checkStringLength("Hello, world!", 10));
console.log(checkStringLength("Hello, world!", 20));
console.log(checkStringLength("     Hello, world!     ", 10));

function checkNumberString(string) {
	const numberString = string.match(/\d/g);
	if (numberString === null) {
		return NaN;
	} else return parseInt(numberString.join(""));
}

console.log(checkNumberString("2023 год"));
console.log(checkNumberString("ECMAScript 2022"));
console.log(checkNumberString("1 кефир, 0.5 батона"));
console.log(checkNumberString("агент 007"));
console.log(checkNumberString("а я томат"));
console.log(checkNumberString("2023"));
console.log(checkNumberString("-1"));
console.log(checkNumberString("1.5"));
