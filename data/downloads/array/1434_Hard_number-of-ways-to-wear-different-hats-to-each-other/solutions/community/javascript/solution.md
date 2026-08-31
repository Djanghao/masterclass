# Number of Ways to Wear Different Hats to Each Other

**Author:** Sam_Neamah
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/4605638/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/4605638/)

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
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function(hats) {
    const MOD = 10**9 + 7;
        const n = hats.length;
    const memo = new Map();

    function backtrack(mask, hat) {
        if (mask === (1 << n) - 1) {
            return 1; // All people have chosen hats
        }

        if (hat > 40) {
            return 0; // No more hats to choose
        }

        const state = `${mask}-${hat}`;
        if (memo.has(state)) {
            return memo.get(state);
        }

        let ways = backtrack(mask, hat + 1); // Skip the current hat

        for (let person = 0; person < n; person++) {
            if ((mask & (1 << person)) === 0 && hats[person].includes(hat)) {
                ways += backtrack(mask | (1 << person), hat + 1);
                ways %= MOD;
            }
        }

        memo.set(state, ways);
        return ways;
    }

    return backtrack(0, 1);
};
```