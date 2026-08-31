# Bit Manipulation | Time: O(1) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/5502873/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/5502873/)

---

[Submission](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/submissions/1326614138/)

![Submission runtime](./images/0.png)

# Complexity
- Time complexity: O(1)

First 30 bits are always checked, so the worst case time complexity is constant time, thus O(1).

- Space complexity: O(1)

Two numeric variables are used, so the space complexity is O(1).

# Code
```typescript
/** 
 * Definition of commonSetBits API.
 * var commonSetBits = function(num: number): number {}
 */
function findNumber(): number {
    let num = 0;
    for (let bit = 0; bit < 30; ++bit) {
        num |= commonSetBits(1 << bit) << bit;
    }
    return num;
};
```