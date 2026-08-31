# [JS - Commented] Easy solution, 80ms

**Author:** davidolive
**Votes:** 6
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/943593/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/943593/)

---

The idea is to easily count all numbers with less digits than `n`, and then find those with the same amount of digits using recursion. Detailed comments in the code below:

```
var atMostNGivenDigitSet = function(digits, n) {
    let count = 0;
    
    /*
    Transform digits to integers and sort them from small to big.
    */
    digits = digits.map(d => parseInt(d, 10));
    digits.sort((a, b) => a - b);
    
    const digitsLength = digits.length;
    const nDigits = ('' + n).split('').map(d => parseInt(d, 10));
    
    /* 
    Add all possible numbers that have less digits than n.

    For example, if we have n = 216 and digits = [1,2,4]:
    - Count all numbers of 1 digit _ (3^1 possibilites)
    - Count all numbers of 2 digits _ _ (3^2 possibilites)
    */
    for (let i = 1; i < nDigits.length; i++) {
        count += Math.pow(digitsLength, i);
    }
    
    /*
    Now we need to find those numbers with the same amount of digits
    as n that are less or equal than n. Let's call 'x' the first digit
    of n and 'y' any of the available digits. We have these possibilities:
    
    - If y < x: we can count all numbers of n digits starting with y.
      In the previous example, if we have x = 2 and y = 1, we can add all
      numbers of the form 1 _ _. There are 3^2 possibilites.
    - If y = x: then we need to do recursion on the next position. Using
      again the previous example, if x = 2 and y = 2, we have numbers of
      the form 2 _ _. Some are possible (211) and some aren't (221).
    - If y > x: then we don't count anything, as we don't meet the condition.
    
    In the recursion, remember the include the base case! If we already
    covered all digits positions, it means we found n itself, which is valid
    since n <= n. Hence, we need to count 1.
    */
    const find = (pos, nDigits, digits) => {
        if (pos === nDigits.length) {
            return 1;
        }
        
        let count = 0;
        
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] < nDigits[pos]) {
                count += Math.pow(digitsLength, nDigits.length - pos - 1);
            } else if (digits[i] == nDigits[pos]) {
                count += find(pos + 1, nDigits, digits);
            } else {
                break;
            }
        }
        
        return count;
    }
    
    count += find(0, nDigits, digits);
    
    return count;
};
```