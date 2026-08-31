# Most readable and simple JavaScript / TypeScript solution

**Author:** Arkadiy1
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-strings/solutions/3415548/](https://leetcode.com/problems/add-strings/solutions/3415548/)

---


# JavaScript Code
```
function addStrings(num1, num2) {
    let resultSum = '';
    let rest = 0;
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;

    while (p1 >= 0 || p2 >= 0 || rest > 0) {
        const a = +num1[p1] || 0;
        const b = +num2[p2] || 0;
        const currSum = a + b + rest;

        resultSum = `${currSum % 10}${resultSum}`;
        rest = Math.floor(currSum / 10);

        p1--; 
        p2--;
    }

    return resultSum;
};
```

# TypeScript Code
```
function addStrings(num1: string, num2: string): string {
    let resultSum: string = '';
    let rest: number = 0;
    let p1: number = num1.length - 1;
    let p2: number = num2.length - 1;

    while (p1 >= 0 || p2 >= 0 || rest > 0) {
        const a = +num1[p1] || 0;
        const b = +num2[p2] || 0;
        const currSum = a + b + rest;

        resultSum = `${currSum % 10}${resultSum}`;
        rest = Math.floor(currSum / 10);

        p1--; 
        p2--;
    }

    return resultSum;
};
```