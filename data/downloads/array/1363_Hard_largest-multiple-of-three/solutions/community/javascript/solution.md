# Concise JavaScript solution based on Math

**Author:** jaibatrik
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/977443/](https://leetcode.com/problems/largest-multiple-of-three/solutions/977443/)

---

**Approach**
The number will be divisible by 3 if the sum of all digits is divisible by 3. The largest number will be sorted by digits in a descending order.
> e.g. [8,1,9] -> [9,8,1]

We sort the digits, and find out the sum of digits. If there's a remainder after dividing by 3, we try to find the smallest digit which can be removed from the digits array. We do that by traversing digits array from last and seeing if subtracting the remainder from any digit makes it divisible by 3.

> e.g. In [9,8,2,1], the remainder is 2; and 2 is the smallest digit which becomes divisible by 3 if we subtract 2 from it.

If we don't find any such digit, we remove everything from array except those divisible by 3 directly.

> e.g. In [9,4,7], the remainder is 2; and there's not a single number that becomes divisible by 3 if we subtract 2 from it. So, we take only 9 from the bunch.

**Code**
```javascript
/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    // highest digit first
    digits.sort((l, r) => r - l);
    
    // what is the remainder of the total sum?
    const sumRemainder = digits.reduce((a, c) => a + c, 0) % 3;
    
    if (sumRemainder) {
        let targetIndex = 0, i = digits.length - 1;
        
        // try to find what is the smallest number that can be removed
        for (; i >= 0; i--) {
            if ((digits[i] - sumRemainder) % 3 === 0) {
                targetIndex = i;
                break;
            }
        }

        if (i < 0) {
            // iterated the whole loop, couldn't find a single number to remove
            // remove everything but multiples of 3
            digits = digits.filter(v => v % 3 === 0);
        } else {
            digits.splice(targetIndex, 1);
        }
    }
    
    return (digits[0] === 0) ? '0' : digits.join('');
};
```