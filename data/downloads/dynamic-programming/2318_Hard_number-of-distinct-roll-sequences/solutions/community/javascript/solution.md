# js memorization search solution

**Author:** swu1747
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/5189710/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/5189710/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @return {number}
 */
var distinctSequences = function (n) {
    const mod = Math.pow(10, 9) + 7
    const memo = new Array(n + 1).fill(0).map(() => new Array(7).fill(0).map(() => new Array(7).fill(-1)))
    const gcd = { 1: {}, 2: { 4: true, 6: true }, 3: { 6: true }, 4: { 2: true, 6: true }, 5: {}, 6: { 2: true, 3: true, 4: true } }
    const dfs = (i, last, turn) => {
        if (turn === n) {
            return 1
        }
        if (memo[turn][i][last] !== -1 && last !== 7) {
            return memo[turn][i][last]
        }
        let res = 0
        for (let j = 1; j < 7; j++) {
            if (j !== i && j !== last && !gcd[i][j]) {
                res += dfs(j, i, turn + 1) % mod
            }
        }
        memo[turn][i][last] = res
        return memo[turn][i][last]
    }
    let ans = 0
    for (let i = 1; i < 7; i++) {
        ans += dfs(i, 7, 1)
    }
    return ans % mod
};
```