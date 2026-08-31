# Bestest Solution Ever In JavaScript

**Author:** RockstarPabitra
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/3594109/](https://leetcode.com/problems/count-the-repetitions/solutions/3594109/)

---


# Code
```
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    let idx2 = 0;
    
    let doWhile = true;
    let strCounter = 0;
    let sumChars = 0;
    let iterations = 0;
    while (doWhile && iterations < n1) {
        for (let idx1 = 0; idx1 < s1.length; idx1++) {
            const char1 = s1[idx1];
            const char2 = s2[idx2];
            if (char1 === char2) {
                sumChars++;
                idx2++;
                if (sumChars === s2.length) {
                    strCounter ++;
                    sumChars = 0;
                    idx2 = 0;
                }
            }
        }
        if (sumChars === 0) {
            doWhile = false;
        }
        iterations++;
    }
    return Math.floor((strCounter / n2) * (n1 / iterations));
}
```