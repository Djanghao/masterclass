# JavaScript O(32)

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/5280349/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/5280349/)

---

# Intuition
Firstly we obtain a base common count, then we compare for each bit.
# Approach
We first count its common bits with 0, then use single-bit masks: 1, 2, 4, 8... to see whether increases (by one). If so, it indicates that the corresponding bit is 1. And for each mask, don't forget to call the API in order to reset the number.
# Complexity
- Time complexity:
O(32)
- Space complexity:
O(32)
# Code
```
/** 
 * Definition of commonBits API.
 * @param {number} num
 * @return {integer}
 * var commonBits = function(num) {}
 */

/**
 * @return {number}
 */
var findNumber = function() {
    const size = 32
    const base = commonBits(0)


    let result = 0
    for (let offset = 0; offset < size; offset++) {
        const mask = (1 << offset)
        const outcome = commonBits(mask)
        if (outcome > base) {
            result |= mask
        }
        
        commonBits(mask)
    }


    return result
};
```