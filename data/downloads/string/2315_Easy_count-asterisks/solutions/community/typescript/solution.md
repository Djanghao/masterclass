# Simple linear TS solution

**Author:** a_lazebnyi
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/5822120/](https://leetcode.com/problems/count-asterisks/solutions/5822120/)

---

# Approach
Use count of `|` to determine if `*` is between a pair of `|` or not.
To determine that we can use the reminder operator %.
So, if `pairCount % 2 === 0` we can assume that `*` is outside of a pair of `|` and vice versa.

# Complexity
- Time complexity:
O(n) as we iterate over every string character.

- Space complexity:
O(1) as we only store two counters;

# Code
```typescript []
function countAsterisks(s: string): number {
    let count = 0;
    let pairCount = 0;;

    for (let i = 0; i < s.length; i++) {
        if (pairCount % 2 === 0) {
            if (s[i] === '*') count++;
        }
        if (s[i] === '|') {
            pairCount++;
        }
    }

    return count;
};
```