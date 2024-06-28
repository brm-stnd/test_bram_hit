function isValidBracket(input){
    // create all bracket type
    const bracketType = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    }

    // remove all space from string
    const inputWithoutSpaces = input.replace(/\s/g, '');

    // place for invalid bracket
    const invalidBracket = [];
    //loop the input string
    for(let i=0; i < inputWithoutSpaces.length; i++){
        // if found open bracket input to invalid bracket
        if(inputWithoutSpaces[i] === "(" || inputWithoutSpaces[i] === "[" || inputWithoutSpaces[i] === "{") {
            invalidBracket.push(inputWithoutSpaces[i])
        // pop opening bracket of the stack
        // if there is a corresponding closing bracket in the string
        }else if (invalidBracket[invalidBracket.length - 1] === bracketType[inputWithoutSpaces[i]]){
            invalidBracket.pop()
        // else should be NO because bracket doesn't have closed bracket
        }else {
            console.log(input+" : ", "NO")
            return;
        }
    }

    // check if the invalid bracket still exist at the array
    const isValid = invalidBracket.length ? "NO" : "YES";
    console.log(input+" : ", isValid)
    return;
}

isValidBracket("{ [ ( ) ] }")
isValidBracket("{ [ ( ] ) }")
isValidBracket("{ ( ( [ ] ) [ ] ) [ ] }")