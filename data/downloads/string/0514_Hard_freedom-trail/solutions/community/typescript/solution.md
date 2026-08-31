# Just DP || O(mn) time || O(n) space

**Author:** xkatianx
**Votes:** 0
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5669614/](https://leetcode.com/problems/freedom-trail/solutions/5669614/)

---

# Complexity
$n$ is the length of `ring` and $m$ is the length of `key`.
- Time complexity: $O(mn)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
        n = len(ring)
        prev_dp = [0] * n  # Minimum steps to the end
        for char in reversed(key):
            curr_dp = [1 + prev_dp[i] if ring[i] == char else float("inf") for i in range(n)]  # Initialize steps for current character
            min_index = curr_dp.index(min(curr_dp))  # Find index of minimum steps
            for direction in [1, -1]:  # Iterate in both directions
                current_index = min_index
                for _ in range(n):
                    next_index = (current_index + direction) % n
                    curr_dp[next_index] = min(curr_dp[next_index], curr_dp[current_index] + 1)  # Update steps for neighboring positions
                    current_index = next_index
            prev_dp = curr_dp  # Update previous dp for the next iteration
        return prev_dp[0]  # Return minimum steps from the initial position

```
```typescript []
function findRotateSteps(ring: string, key: string): number {
    function prev (n: number) {
        return (n - 1 + ring.length) % ring.length
    }
    function next (n: number) {
        return (n + 1) % ring.length
    }

    const dp: number[][] = []
    for (let j = key.length - 1; j >= 0; j--) {
        delete dp[j + 2] // O(n) space :)
        dp[j] = []
        let [minI, minV] = [-1, Infinity]
        // update characters that match
        for (let i = 0; i < ring.length; i++) {
            if (ring[i] === key[j]) {
                dp[j][i] = 1 + (dp[j + 1]?.at(i) ?? 0)
                if (dp[j][i] < minV) [minI, minV] = [i, dp[j][i]]
            }
        }
        // update characters that don't match, rotate counterclockwise
        for (let i = next(minI), v = minV + 1; i !== minI; i = next(i), v++) {
            v = Math.min(v, dp[j][i] ?? Infinity)
            dp[j][i] = v
        }
        // update characters that don't match, rotate clockwise
        for (let i = prev(minI), v = minV + 1; i !== minI; i = prev(i), v++) {
            v = Math.min(v, dp[j][i] ?? Infinity)
            dp[j][i] = v
        }
    }
    return dp[0][0]
}

```
``` python3 []
class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
        n = len(ring)
        m = len(key)

        dp2 = [0] * n
        for j in range(m - 1, -1, -1):
            dp1 = [float("inf")] * n
            min_i, min_v = -1, float("inf")

            # update characters that match
            for i in range(n):
                if ring[i] == key[j]:
                    dp1[i] = 1 + dp2[i]
                    if dp1[i] < min_v:
                        min_i, min_v = i, dp1[i]

            # update characters that don't match, rotate counterclockwise
            i, v = (min_i + 1) % n, min_v + 1
            while i != min_i:
                v = min(v, dp1[i])
                dp1[i] = v
                i = (i + 1) % n
                v += 1

            # update characters that don't match, rotate clockwise
            i, v = (min_i - 1) % n, min_v + 1
            while i != min_i:
                v = min(v, dp1[i])
                dp1[i] = v
                i = (i - 1) % n
                v += 1
            dp2 = dp1

        return dp2[0]

```