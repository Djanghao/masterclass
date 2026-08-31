# Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/5829505/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/5829505/)

---

# Intuition
The problem is about painting a grid where adjacent cells cannot be the same color. We need to find a way to count valid color combinations efficiently, considering that there are different cases based on whether two adjacent cells are the same color or all three are different.

# Approach
Use DP to maintain two arrays: one for cases where two adjacent cells are the same color and one for cases where all three cells are different, updating these arrays based on the previous row's values.

# Complexity
- Time complexity:
 O(n) because we loop through each row once.

- Space complexity:
O(n) since we use two arrays to store results for each row.

# Code
```typescript []
function numOfWays(n: number): number {
    const mod = Math.pow(10, 9) + 7;
    const dp212: number[] = new Array(n).fill(0);
    const dp123: number[] = new Array(n).fill(0);

    // Base case for n = 1
    dp212[0] = 6;
    dp123[0] = 6;

    for (let i = 1; i < n; i++) {
        // two sides same
        dp212[i] = (dp212[i - 1] * (5 - 2) + dp123[i - 1] * (6 - 2 - 1 - 1)) % mod;
        // three different colors
        dp123[i] = (dp123[i - 1] * (5 - 1 - 1 - 1) + dp212[i - 1] * (6 - 2 - 2)) % mod;
    }

    return (dp212[n - 1] + dp123[n - 1]) % mod;
}

```