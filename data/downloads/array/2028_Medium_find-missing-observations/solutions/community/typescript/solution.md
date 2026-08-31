# 💥 Runtime and memory Beats 100% [EXPLAINED]

**Author:** r9n
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/5738778/](https://leetcode.com/problems/find-missing-observations/solutions/5738778/)

---

# Intuition
We need to find some missing dice rolls that, when combined with the rolls we already know, give the correct average. To do that, we calculate how much the total sum of all the rolls (missing and known) should be, and then figure out what the sum of just the missing rolls must be. If the missing rolls' sum can be split into valid dice values (between 1 and 6), we're good; otherwise, it\u2019s impossible.

# Approach
Calculate the total sum needed for n + m rolls using the given mean.
Subtract the sum of known rolls to find how much the missing rolls should add up to.

If the sum is too small or too big for n dice (must be between n and 6 * n), return an empty array.

Distribute the missing sum evenly across the n dice, with a little adjustment for the remainder.

# Complexity
- Time complexity:
O(m + n): We calculate the sum of m rolls and then distribute values for n missing rolls.

- Space complexity:
O(n): We only store the missing rolls in an array of size n.

# Code
```typescript []
function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const m = rolls.length;
    const totalSum = mean * (n + m);  // Calculate the total sum for all rolls
    const observedSum = rolls.reduce((acc, val) => acc + val, 0);  // Sum of given rolls
    const missingSum = totalSum - observedSum;  // Calculate the sum of missing rolls
    
    // Check if missing sum is valid
    if (missingSum < n || missingSum > 6 * n) {
        return [];  // Impossible to form the array
    }

    // Distribute the missing sum over the `n` rolls
    const result: number[] = new Array(n).fill(Math.floor(missingSum / n));
    let remainder = missingSum % n;
    
    // Distribute the remainder by incrementing the lowest values first
    for (let i = 0; i < remainder; i++) {
        result[i]++;
    }

    return result;
}

```