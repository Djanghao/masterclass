# JS/TS Solution

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-i-win/solutions/6109737/](https://leetcode.com/problems/can-i-win/solutions/6109737/)

---

# Complexity
- Time complexity: O(2^N)

- Space complexity: O(2^N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    // Edge cases
    const sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
    if (sum < desiredTotal) return false;
    if (desiredTotal <= 0) return true;

    const memo = new Map();

    const canWin = (usedNumbers, remainingTotal) => {
        if (memo.has(usedNumbers)) return memo.get(usedNumbers);

        for (let i = 1; i <= maxChoosableInteger; i++) {
            const currentMask = 1 << i;

            if ((usedNumbers & currentMask) === 0) { // Check if `i` is unused
                // If choosing `i` wins or leaves the opponent in a losing state
                if (remainingTotal - i <= 0 || !canWin(usedNumbers | currentMask, remainingTotal - i)) {
                    memo.set(usedNumbers, true);
                    return true;
                }
            }
        }

        memo.set(usedNumbers, false);
        return false;
    };

    return canWin(0, desiredTotal);
};

```