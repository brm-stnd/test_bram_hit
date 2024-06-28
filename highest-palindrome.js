let currentHighestPalindrome = -1;
let numberList = []

function highestPalindrome(s, maxDigit) {
    //convert string to array
    const inputNumber = s.split('');
    currentHighestPalindrome = -1;

    if (maxDigit > inputNumber.length) {
        return "error: maximum length is " + inputNumber.length;
    }

    //remove duplicate number at array
    numberList = [...new Set(inputNumber)];
    //sorting array value from lower to higher
    for (let i = 1; i < numberList.length; i++){
        for (let j = 0; j < i; j++){
            if (numberList[i] < numberList[j]) {
                let x = numberList[i];
                numberList[i] = numberList[j];
                numberList[j] = x;
            }
        }
    }
    //call func palindrome generator
    palindromeGenerator(inputNumber, maxDigit, 0, 0);

    return currentHighestPalindrome;
}

function palindromeGenerator(inputNumber, maxDigit, currentDigit, index) {
    //if current digit more than max digit end the recursive func
    if (currentDigit > maxDigit) return;

    //check if number is palindrome and lower than current highest palindrome number
    if (checkPalindrome(inputNumber) && parseInt(inputNumber.join('')) > currentHighestPalindrome) {
        currentHighestPalindrome = parseInt(inputNumber.join(''));
    }

    //looping for change value at input number
    for (let i = index; i < inputNumber.length; i++) {
        let original = inputNumber[i];
        for (let number of numberList) {
            if (number !== original) {
                inputNumber[i] = number;
                //run recursive func until found the max digit and add + 1 if not
                palindromeGenerator(inputNumber, maxDigit, currentDigit + 1, i + 1);
                inputNumber[i] = original;
            }
        }
    }
}

function checkPalindrome(newNumber) {
    return newNumber.join('') === newNumber.slice().reverse().join('');
}

let s = "3943";
let k = 1;
console.log(highestPalindrome(s, k));

s = "932239";
k = 2;
console.log(highestPalindrome(s, k));