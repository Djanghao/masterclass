# [Typescript] Breif explanation

**Author:** kiba_hanzo
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/3568313/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/3568313/)

---

Break it into two parts:

Ans = All numbers under target number length + Numbers with lenght equal to target length

# Code
```
const power = (num: number, pow: number) => {
    if(pow === 0)
        return 1;

    return num * power(num, pow-1);
}

// All possible numbers with digits under length
function numbersWithoutLimit(digitCount: number, numLen: number){
    if(numLen === 0)
        return 0;

    return digitCount * power(digitCount, numLen-1) + numbersWithoutLimit(digitCount, numLen-1);
}

function numbersUnderLimit(digits: number[], limitInDigits: number[]) {
    if(limitInDigits.length === 0)
        return 1;

    let sol = 0;

    // If first digit is lower, rest can be anything
    const lowerDigitCount = digits.filter(digit => digit < limitInDigits[0]).length;
    sol += lowerDigitCount * power(digits.length, limitInDigits.length - 1);

    // If first digit is equal, recrse with reamining target digits
    if(digits.includes(limitInDigits[0])) {
        limitInDigits.shift();
        sol += numbersUnderLimit(digits, limitInDigits);
    }
    return sol;
}

function atMostNGivenDigitSet(digits: string[], n: number): number {
    const limitInDigits = n.toString().split('').map(digit => parseInt(digit));

    let sol = 0;
    if(limitInDigits.length > 1)
        sol += numbersWithoutLimit(digits.length, limitInDigits.length - 1);
    sol += numbersUnderLimit(digits.map(digit => parseInt(digit)), limitInDigits);

    return sol;
};
```