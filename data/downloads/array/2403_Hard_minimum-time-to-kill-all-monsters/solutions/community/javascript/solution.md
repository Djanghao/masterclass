# bitmask dp

**Author:** parkCloud
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/4877600/](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/4877600/)

---

# Intuition
bitmask dp

# Approach
dp[mask] means how many monster are killed, suppose there are 3 monsters, from dp[0] which equals 0 can generate 001,010,100 3 states, and figure out the days it takes to kill that one bit, gain equals number of monster killd so far. with the help of combinations function you can easily generate dp transition

# Complexity
- Time complexity:
O(n * (Cnr +1))

- Space complexity:
O(2**n)

# Code
```
/**
 * @param {number[]} power
 * @return {number}
 */
var minimumTime = function (power) {
    let n = power.length
    let dp = Array(1 << n).fill(Infinity)
    dp[0] = 0
    function combinations(n, r) {
        let output = []
        let used = Array(n).fill(false)
        function dfs(at, R) {
            if (R == 0) {
                let res = []
                for (let i = 0; i < n; i++) {
                    if (used[i]) {
                        res.push(i)
                    }
                }
                output.push(res)
                return
            }
            for (let i = at; i < n; i++) {
                if (!used[i]) {
                    used[i] = true
                    dfs(i + 1, R - 1)
                    used[i] = false
                }
            }
        }
        dfs(0, r)
        return output
    }
    for (let m = 1; m <= n; m++) {
        for (const subset of combinations(n, m)) {
            let mask = 0
            for (const bit of subset) {
                mask |= (1 << bit)
            }
            for (let next = 0; next < n; next++) {
                if (mask & (1 << next)) {
                    let nm = mask ^ (1 << next)
                    dp[mask] = Math.min(dp[mask], dp[nm] + Math.ceil(power[next] / m))
                }
            }
        }

    }
    return dp[(1 << n) - 1]
};
```