const alphabet = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
    l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

function weightedString(inputStrings, expectedArray){
    //convert string to array
    const splitInputStrings = inputStrings.split('');

    let previousValue = 0;
    let arrayResult = [];

    splitInputStrings.forEach((string)=>{
        const valueString = alphabet[string];

        //if value same with previous value count value with previous value
        if(previousValue === valueString){
            arrayResult[arrayResult.length - 1] = arrayResult[arrayResult.length - 1] + valueString
        }else{
            arrayResult.push(valueString);
        }
        
        previousValue = valueString;
    })

    //I guess the example was wrong because actualy second index value should be 4 because bb = 2 + 2 = 4
    console.log('Expected Result :', expectedArray);
    console.log('Real Result :', arrayResult);

    if(arrayResult.length !== expectedArray.length){
        console.log(`error: array length doesn't same`)
    }

    //compare array result between expected and real result
    const comparisonResult = []
    expectedArray.forEach((string, i)=>{
        const isCorrect = string === arrayResult[i]
        comparisonResult.push(isCorrect)
    })

    console.log('=================================================')
    console.log('Comparison Result :', comparisonResult)
}

weightedString("abbcccd", [1, 3, 9, 8]);



